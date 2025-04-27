from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import mysql.connector
import time
import re

# Hàm tạo slug từ tiêu đề
def create_slug(title):
    # Chuyển tiêu đề thành chữ thường và thay khoảng trắng bằng dấu gạch ngang
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)  # Loại bỏ ký tự đặc biệt
    slug = re.sub(r'[\s-]+', '-', slug)  # Thay khoảng trắng hoặc dấu gạch ngang liên tiếp thành một dấu gạch ngang
    slug = slug.strip('-')  # Loại bỏ dấu gạch ngang ở đầu và cuối
    return slug

# Khởi tạo trình duyệt
driver = webdriver.Chrome()
driver.get("https://edition.cnn.com/science")
time.sleep(3)

try:
    # Kết nối MySQL
    connection = mysql.connector.connect(
        host='127.0.0.1',
        database='bao',
        user='root',
        password=''
    )
    print('✅ Đã kết nối MySQL')

    # Tìm tất cả các phần tử chứa tiêu đề bài báo
    headlines = driver.find_elements(By.CSS_SELECTOR, ".container__headline-text")

    for headline in headlines:
        try:
            # Lấy tiêu đề
            title = headline.text.strip()
            
            # Tạo slug từ tiêu đề
            slug = create_slug(title)

            # Lấy URL bài báo (tìm thẻ <a> cha)
            parent_link = headline.find_element(By.XPATH, "./ancestor::a[contains(@class, 'container__link')]")
            url = parent_link.get_attribute('href') or ""
            if url.startswith("/"):
                url = f"https://edition.cnn.com{url}"

            # Lấy hình ảnh (tìm trong cùng container cha)
            image_url = ""
            try:
                container = headline.find_element(By.XPATH, "./ancestor::div[contains(@class, 'container')]")
                img = container.find_element(By.TAG_NAME, "img")
                image_url = img.get_attribute("src") or img.get_attribute("data-src") or ""
            except NoSuchElementException:
                print(f"⚠️ Không tìm thấy ảnh cho bài: {title[:30]}...")

            print(f"📌 Tiêu đề: {title}")
            print(f"🔗 URL: {url[:70]}..." if url else "🔗 Không có URL")
            print(f"🖼️ Ảnh: {image_url[:70]}..." if image_url else "🖼️ Không có ảnh")
            print(f"📝 Slug: {slug}")
            print("-" * 50)

            # Lưu vào database
            if title and url:  # Chỉ lưu nếu có cả tiêu đề và URL
                cursor = connection.cursor()
                sql = """INSERT INTO science_news (title, url, image_url, slug) 
                         VALUES (%s, %s, %s, %s) 
                         ON DUPLICATE KEY UPDATE 
                         title = VALUES(title), 
                         image_url = VALUES(image_url), 
                         slug = VALUES(slug)"""
                cursor.execute(sql, (title, url, image_url, slug))
                connection.commit()
                cursor.close()

        except Exception as e:
            print(f"❌ Lỗi khi xử lý bài báo: {str(e)}")
            continue

except Exception as e:
    print(f"❌ Lỗi chính: {str(e)}")
finally:
    driver.quit()
    if 'connection' in locals() and connection.is_connected():
        connection.close()
    print("✅ Đã đóng tất cả kết nối")
