from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import mysql.connector
import time
import json # Cần import json nếu dùng cột JSON trong DB

# Khởi tạo trình duyệt
driver = webdriver.Chrome()
# --- SỬA LỖI 1: Truy cập trang danh sách bài viết ---
# driver.get("https://edition.cnn.com/science")
# print("Đã truy cập trang CNN Science...")
# Thay bằng URL cụ thể mà bạn muốn
specific_url = "https://edition.cnn.com/2025/04/03/science/ancient-dna-green-sahara-mummies/index.html"
driver.get(specific_url)
print(f"Đã truy cập trang: {specific_url}")
time.sleep(5) # Tăng thời gian chờ trang tải hoàn chỉnh

connection = None

try:
    # Kết nối MySQL
    connection = mysql.connector.connect(
        host='127.0.0.1',
        database='bao',     # Thay tên DB nếu cần
        user='root',        # Thay user nếu cần
        password=''         # Thay password nếu cần
    )
    print('✅ Đã kết nối MySQL')

    article_data = {
        'url': '',
        'title': '',
        'author': '',
        'image_url': '',
        'image_caption': '',
        'content': '',  # Thay content_paragraph bằng content để lưu toàn bộ nội dung
        'subheader': '',
        'inline_images': [] # Thêm nếu bạn có cột này trong DB
    }

    article_data['url'] = specific_url

    # --- SỬA LỖI 2 & 3: Lấy từng phần tử với XPath linh hoạt và try-except riêng ---

    # 1. Lấy tiêu đề (Thử nhiều selector)
    try:
        # Ưu tiên data-editable nếu có
        title_element = driver.find_element(By.XPATH, '//h1[@data-editable="headlineText"]')
        article_data['title'] = title_element.text.strip()
    except NoSuchElementException:
        try:
            # Thử selector cũ hơn của bạn nhưng bỏ bớt class phụ
            title_element = driver.find_element(By.XPATH, '//h1[contains(@class,"headline__text")]')
            article_data['title'] = title_element.text.strip()
        except NoSuchElementException:
            print("⚠️ Không tìm thấy tiêu đề (h1)")
            article_data['title'] = '' # Gán giá trị mặc định nếu không tìm thấy

    # 2. Tác giả (Thử nhiều cấu trúc)
    try:
        # Thử lấy tên tác giả từ class byline__name
        author_elements = driver.find_elements(By.XPATH, '//span[@class="byline__name"]')
        if author_elements:
            article_data['author'] = ', '.join([elem.text for elem in author_elements if elem.text])
        else:
            # Thử lấy tác giả từ link trong byline__names (ví dụ: "By Jacopo Prisco, CNN")
            byline_element = driver.find_element(By.XPATH, '//div[@class="byline__names"]')
            if byline_element:
                text = byline_element.text
                if text.startswith("By "):
                    article_data['author'] = text[3:].split(',')[0].strip()
    except NoSuchElementException:
        print("ℹ️ Lỗi khi tìm tên tác giả")
        article_data['author'] = '' # Gán giá trị mặc định nếu không tìm thấy


    # 3. Ảnh đại diện (Thường là ảnh đầu tiên)
    try:
        # Lấy src hoặc data-src của ảnh đầu tiên trong bài
        main_img_element = driver.find_element(By.XPATH, '(//img[contains(@class, "image__dam-img")])[1]')
        article_data['image_url'] = main_img_element.get_attribute("src") or main_img_element.get_attribute("data-src") or ""
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy ảnh đại diện (img)")
        article_data['image_url'] = '' # Gán giá trị mặc định nếu không tìm thấy

    # 4. Chú thích ảnh (Caption của ảnh đại diện - nếu có)
    try:
        # Tìm caption trong div với class image__caption và attribution, sau đó lấy span con có data-editable
        caption_element = driver.find_element(By.XPATH, '//div[contains(@class, "image__caption") and contains(@class, "attribution")]//span[@data-editable="metaCaption"]')
        article_data['image_caption'] = caption_element.text.strip()
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy chú thích ảnh đại diện")
        article_data['image_caption'] = '' # Gán giá trị mặc định nếu không tìm thấy


    # 5. Lấy toàn bộ nội dung bài viết từ các thẻ p có class 'paragraph inline-placeholder vossi-paragraph'
    try:
        paragraph_elements = driver.find_elements(By.XPATH, '//p[contains(@class, "paragraph") and contains(@class, "inline-placeholder") and contains(@class, "vossi-paragraph")]')
        content_parts = [p.text.strip() for p in paragraph_elements if p.text.strip()]
        article_data['content'] = "\n\n".join(content_parts) # Nối các đoạn văn bằng dấu xuống dòng đôi
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy nội dung bài viết (các thẻ p có class 'paragraph inline-placeholder vossi-paragraph')")
        article_data['content'] = ''

    # 6. Subheader (Ví dụ: h2 đầu tiên trong bài)
    try:
        # Tìm h2 đầu tiên trong vùng nội dung bài viết
        subheader_element = driver.find_element(By.XPATH, '(//div[contains(@class,"article__content")]//h2)[1]')
        article_data['subheader'] = subheader_element.text.strip()
    except NoSuchElementException:
        # print("ℹ️ Không tìm thấy subheader (h2)") # Thường không quá quan trọng
        article_data['subheader'] = '' # Gán giá trị mặc định nếu không tìm thấy

    # In thông tin lấy được (tùy chọn)
    print(f"  Tiêu đề: {article_data['title'][:60]}...")
    print(f"  Tác giả: {article_data['author']}")
    print(f"  Ảnh: {article_data['image_url'][:70]}...")
    print(f"  Caption: {article_data['image_caption']}")
    print(f"  Nội dung: {article_data['content'][:200]}...") # In một phần nội dung để kiểm tra
    print(f"  Subheader: {article_data['subheader']}")

    # --- SỬA LỖI 4: LƯU VÀO DATABASE vào bảng detailed_news ---
    if article_data['title'] and article_data['url']:
        cursor = connection.cursor()
        # Thay đổi tên bảng thành detailed_news và các tên cột tương ứng
        sql = """INSERT INTO detailed_news
                     (url, title, author, image_url, image_caption, content, subheader)
                     VALUES (%s, %s, %s, %s, %s, %s, %s)
                     ON DUPLICATE KEY UPDATE
                     title = VALUES(title),
                     author = VALUES(author),
                     image_url = VALUES(image_url),
                     image_caption = VALUES(image_caption),
                     content = VALUES(content),
                     subheader = VALUES(subheader),
                     scraped_at = CURRENT_TIMESTAMP""" # Cập nhật thời gian scrape

        # Đảm bảo tuple giá trị khớp với thứ tự cột trong SQL
        values = (
            article_data['url'],
            article_data['title'],
            article_data['author'],
            article_data['image_url'],
            article_data['image_caption'],
            article_data['content'], # Sử dụng article_data['content']
            article_data['subheader']
            # Thêm giá trị cho các cột khác nếu có
        )
        cursor.execute(sql, values)
        connection.commit()
        cursor.close()
        print(f"✅ Đã lưu/cập nhật vào detailed_news: {article_data['title'][:50]}...")
    else:
        print("⚠️ Thiếu URL hoặc Tiêu đề, không lưu vào DB.")

except mysql.connector.Error as err:
    print(f"❌ Lỗi kết nối MySQL: {err}")
except Exception as e:
    print(f"❌ Lỗi chính trong quá trình chạy: {str(e)}")
finally:
    if 'driver' in locals() and driver:
        print("\nĐang đóng trình duyệt...")
        driver.quit()
    if connection and connection.is_connected():
        connection.close()
        print("✅ Đã đóng kết nối MySQL")
    else:
        print("ℹ️ Không có kết nối MySQL để đóng hoặc đã đóng.")
    print("✅ Hoàn tất")