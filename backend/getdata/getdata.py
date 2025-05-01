from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import csv
import time
from datetime import datetime

# Khởi tạo trình duyệt
driver = webdriver.Chrome()
driver.get("https://edition.cnn.com/")
time.sleep(3)

# Tạo file CSV để lưu dữ liệu
output_filename = f"cnn_headlines_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"

try:
    with open(output_filename, mode='w', newline='', encoding='utf-8-sig') as file:
        writer = csv.writer(file)
        # Viết header cho file CSV
        writer.writerow(['STT', 'Title', 'URL', 'Image URL', 'Timestamp'])
        
        # Tìm tất cả các phần tử chứa tiêu đề bài báo
        headlines = driver.find_elements(By.CSS_SELECTOR, ".container__headline-text")
        
        print(f"🔍 Tìm thấy {len(headlines)} bài viết trên trang chủ CNN")
        print("="*80)
        
        for index, headline in enumerate(headlines, start=1):
            try:
                # Lấy tiêu đề
                title = headline.text.strip()
                
                # Lấy URL bài báo (tìm thẻ <a> cha)
                parent_link = headline.find_element(By.XPATH, "./ancestor::a[contains(@class, 'container__link')]")
                url = parent_link.get_attribute('href') or ""
                if url.startswith("/"):
                    url = f"https://edition.cnn.com{url}"

                # Lấy hình ảnh (tìm trong cùng container cha)
                image_url = ""
                container = headline.find_element(By.XPATH, "./ancestor::div[contains(@class, 'container')]")
                img = container.find_element(By.TAG_NAME, "img")
                image_url = img.get_attribute("src") or img.get_attribute("data-src") or ""
            

                # Ghi dữ liệu vào CSV
                writer.writerow([index, title, url, image_url, datetime.now().strftime('%Y-%m-%d %H:%M:%S')])
                
                # Hiển thị output chi tiết
                print(f"📌 Bài viết #{index}")
                print(f"   Tiêu đề: {title}")
                print(f"   URL: {url[:100]}{'...' if len(url) > 100 else ''}")
                print(f"   Ảnh: {image_url[:100]}{'...' if len(image_url) > 100 else ''}")
                print("-"*80)

            except Exception as e:
                print(f"❌ Lỗi khi xử lý bài viết #{index}: {str(e)}")
                continue

    print(f"\n✅ Đã lưu {len(headlines)} bài viết vào file: {output_filename}")

except Exception as e:
    print(f"❌ Lỗi chính: {str(e)}")
finally:
    driver.quit()
    print("✅ Đã đóng trình duyệt")