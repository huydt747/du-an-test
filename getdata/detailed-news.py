from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import mysql.connector
import time
import re
import unicodedata

# Hàm tạo slug từ tiêu đề
def create_slug(title, connection=None):
    if not title:
        return ""
    
    # Chuyển đổi unicode thành ASCII
    slug = unicodedata.normalize('NFKD', title).encode('ascii', 'ignore').decode('ascii')
    # Chuyển thành chữ thường
    slug = slug.lower()
    # Thay thế các ký tự không phải chữ cái, số hoặc dấu gạch ngang bằng dấu gạch ngang
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    # Loại bỏ dấu gạch ngang ở đầu và cuối
    slug = slug.strip('-')
    # Giới hạn độ dài slug
    slug = slug[:100]
    
    # Kiểm tra slug có tồn tại trong DB không (nếu có connection)
    if connection and connection.is_connected():
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT COUNT(*) FROM detailed_news WHERE slug = %s", (slug,))
            count = cursor.fetchone()[0]
            cursor.close()
            
            if count > 0:
                # Thêm timestamp nếu slug đã tồn tại
                slug = f"{slug}-{int(time.time())}"
        except Exception as e:
            print(f"⚠️ Lỗi khi kiểm tra slug: {str(e)}")
    
    return slug

# Khởi tạo trình duyệt
driver = webdriver.Chrome()
specific_url = "https://edition.cnn.com/2025/04/03/science/ancient-dna-green-sahara-mummies/index.html"
driver.get(specific_url)
print(f"Đã truy cập trang: {specific_url}")
time.sleep(5)

connection = None

try:
    # Kết nối MySQL
    connection = mysql.connector.connect(
        host='127.0.0.1',
        database='bao',
        user='root',
        password=''
    )
    print('✅ Đã kết nối MySQL')

    article_data = {
        'url': specific_url,
        'title': '',
        'slug': '',
        'author': '',
        'image_url': '',
        'image_caption': '',
        'content': '',
        'subheader': '',
        'inline_images': [],
        'publication_date': None
    }

    # 1. Lấy tiêu đề và tạo slug
    try:
        title_element = driver.find_element(By.XPATH, '//h1[@data-editable="headlineText"]')
        article_data['title'] = title_element.text.strip()
    except NoSuchElementException:
        try:
            title_element = driver.find_element(By.XPATH, '//h1[contains(@class,"headline__text")]')
            article_data['title'] = title_element.text.strip()
        except NoSuchElementException:
            print("⚠️ Không tìm thấy tiêu đề (h1)")
    
    # Tạo slug sau khi có title
    if article_data['title']:
        article_data['slug'] = create_slug(article_data['title'], connection)

    # 2. Tác giả
    try:
        author_elements = driver.find_elements(By.XPATH, '//span[@class="byline__name"]')
        if author_elements:
            article_data['author'] = ', '.join([elem.text for elem in author_elements if elem.text])
        else:
            try:
                byline_element = driver.find_element(By.XPATH, '//div[@class="byline__names"]')
                if byline_element:
                    text = byline_element.text
                    if text.startswith("By "):
                        article_data['author'] = text[3:].split(',')[0].strip()
            except NoSuchElementException:
                pass
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy tác giả")

    # 3. Ảnh đại diện
    try:
        main_img_element = driver.find_element(By.XPATH, '(//img[contains(@class, "image__dam-img")])[1]')
        article_data['image_url'] = main_img_element.get_attribute("src") or main_img_element.get_attribute("data-src") or ""
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy ảnh đại diện")

    # 4. Chú thích ảnh
    try:
        caption_element = driver.find_element(By.XPATH, '//div[contains(@class, "image__caption") and contains(@class, "attribution")]//span[@data-editable="metaCaption"]')
        article_data['image_caption'] = caption_element.text.strip()
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy chú thích ảnh")

    # 5. Nội dung bài viết
    try:
        paragraph_elements = driver.find_elements(By.XPATH, '//p[contains(@class, "paragraph") and contains(@class, "inline-placeholder") and contains(@class, "vossi-paragraph")]')
        content_parts = [p.text.strip() for p in paragraph_elements if p.text.strip()]
        article_data['content'] = "\n\n".join(content_parts)
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy nội dung bài viết")

    # 6. Subheader
    try:
        subheader_element = driver.find_element(By.XPATH, '(//div[contains(@class,"article__content")]//h2)[1]')
        article_data['subheader'] = subheader_element.text.strip()
    except NoSuchElementException:
        pass

    # 7. Ngày xuất bản (nếu có)
    try:
        date_element = driver.find_element(By.XPATH, '//div[contains(@class, "timestamp")]')
        article_data['publication_date'] = date_element.text.strip()
    except NoSuchElementException:
        print("ℹ️ Không tìm thấy ngày xuất bản")

    # In thông tin lấy được
    print("\nThông tin bài viết:")
    print(f"  Tiêu đề: {article_data['title']}")
    print(f"  Slug: {article_data['slug']}")
    print(f"  Tác giả: {article_data['author']}")
    print(f"  Ảnh: {article_data['image_url'][:70]}..." if article_data['image_url'] else "  Ảnh: Không có")
    print(f"  Caption: {article_data['image_caption']}")
    print(f"  Nội dung: {article_data['content'][:200]}..." if article_data['content'] else "  Nội dung: Không có")
    print(f"  Subheader: {article_data['subheader']}")
    print(f"  Ngày xuất bản: {article_data['publication_date']}")

    # Lưu vào database
    if article_data['title'] and article_data['url']:
        cursor = connection.cursor()
        sql = """INSERT INTO detailed_news
                 (url, title, slug, author, image_url, image_caption, content, subheader, publication_date)
                 VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                 ON DUPLICATE KEY UPDATE
                 title = VALUES(title),
                 slug = VALUES(slug),
                 author = VALUES(author),
                 image_url = VALUES(image_url),
                 image_caption = VALUES(image_caption),
                 content = VALUES(content),
                 subheader = VALUES(subheader),
                 publication_date = VALUES(publication_date),
                 scraped_at = CURRENT_TIMESTAMP"""

        values = (
            article_data['url'],
            article_data['title'],
            article_data['slug'],
            article_data['author'],
            article_data['image_url'],
            article_data['image_caption'],
            article_data['content'],
            article_data['subheader'],
            article_data['publication_date']
        )
        cursor.execute(sql, values)
        connection.commit()
        cursor.close()
        print(f"\n✅ Đã lưu/cập nhật bài viết vào database")
    else:
        print("\n⚠️ Không lưu vào database do thiếu tiêu đề hoặc URL")

except mysql.connector.Error as err:
    print(f"❌ Lỗi MySQL: {err}")
except Exception as e:
    print(f"❌ Lỗi: {str(e)}")
finally:
    if 'driver' in locals() and driver:
        driver.quit()
        print("✅ Đã đóng trình duyệt")
    if connection and connection.is_connected():
        connection.close()
        print("✅ Đã đóng kết nối database")
    print("🛑 Kết thúc chương trình")