const express = require('express');
const router = express.Router();
const db = require('./db'); // Kết nối cơ sở dữ liệu

// API 1: Lấy danh sách tất cả bài viết
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || null;
  const sort = req.query.sort || 'id'; // Mặc định sort theo id
  
  // Validate sort column để tránh SQL injection
  const validSortColumns = ['id', 'title', 'author', 'publication_date', 'views'];
  const sortColumn = validSortColumns.includes(sort) ? sort : 'id';
  
  const sortOrder = req.query.order === 'asc' ? 'ASC' : 'DESC';
  
  let query = 'SELECT * FROM articles';
  
  if (sort) {
    query += ` ORDER BY ${sortColumn} ${sortOrder}`;
  }
  
  if (limit) {
    query += ' LIMIT ?';
  }
  
  db.query(query, limit ? [limit] : [], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi lấy bài viết' });
    }
    res.json(results);
  });
});

// API 2: Lấy thông tin bài viết theo slug
router.get('/:slug', (req, res) => {
  const slug = req.params.slug;
  const query = 'SELECT * FROM articles WHERE slug = ?';
  db.query(query, [slug], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi lấy bài viết' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Bài viết không tồn tại' });
    }
    res.json(results[0]);
  });
});

// API 3: Tạo mới bài viết và thêm vào danh mục
router.post('/', (req, res) => {
  const { title, url, author, image_url, image_caption, content, subheader, publication_date, slug, category_id } = req.body;
  
  // Tạo transaction để đảm bảo cả 2 thao tác đều thành công
  db.beginTransaction(err => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi bắt đầu transaction' });
    }
    
    // Tạo bài viết mới
    const articleQuery = 'INSERT INTO articles (title, url, author, image_url, image_caption, content, subheader, publication_date, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(articleQuery, [title, url, author, image_url, image_caption, content, subheader, publication_date, slug], (err, results) => {
      if (err) {
        return db.rollback(() => {
          res.status(500).json({ error: 'Lỗi khi tạo bài viết' });
        });
      }
      
      const articleId = results.insertId;
      
      // Thêm vào danh mục
      const categoryQuery = 'INSERT INTO article_categories (article_id, category_id) VALUES (?, ?)';
      db.query(categoryQuery, [articleId, category_id], (err, results) => {
        if (err) {
          return db.rollback(() => {
            res.status(500).json({ error: 'Lỗi khi thêm bài viết vào danh mục' });
          });
        }
        
        db.commit(err => {
          if (err) {
            return db.rollback(() => {
              res.status(500).json({ error: 'Lỗi khi commit transaction' });
            });
          }
          
          res.status(201).json({ 
            message: 'Bài viết đã được tạo và thêm vào danh mục', 
            id: articleId 
          });
        });
      });
    });
  });
});

// API 4: Cập nhật thông tin bài viết
router.put('/:id', (req, res) => {
  const articleId = req.params.id;
  const { title, url, author, image_url, image_caption, content, subheader, publication_date, slug } = req.body;
  const query = 'UPDATE articles SET title = ?, url = ?, author = ?, image_url = ?, image_caption = ?, content = ?, subheader = ?, publication_date = ?, slug = ? WHERE id = ?';
  db.query(query, [title, url, author, image_url, image_caption, content, subheader, publication_date, slug, articleId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi cập nhật bài viết' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Bài viết không tồn tại' });
    }
    res.json({ message: 'Bài viết đã được cập nhật' });
  });
});

// API 5: Xóa bài viết
router.delete('/:id', (req, res) => {
  const articleId = req.params.id;
  const query = 'DELETE FROM articles WHERE id = ?';
  db.query(query, [articleId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi xóa bài viết' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Bài viết không tồn tại' });
    }
    res.json({ message: 'Bài viết đã được xóa' });
  });
});

// API: Lấy bài viết mới nhất
router.get('/latest/:limit', (req, res) => {
  const limit = parseInt(req.params.limit) || 5;
  const query = 'SELECT * FROM articles ORDER BY id DESC LIMIT ?';
  db.query(query, [limit], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi lấy bài viết mới nhất' });
    }
    res.json(results);
  });
});

// Sửa route này để match với frontend call
router.patch('/:slug/views', (req, res) => {
  const slug = req.params.slug;
  
  // Tăng views và trả về article với views mới
  const updateQuery = 'UPDATE articles SET views = COALESCE(views, 0) + 1 WHERE slug = ?';
  
  db.query(updateQuery, [slug], (err, updateResult) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi cập nhật views' });
    }
    
    if (updateResult.affectedRows === 0) {
      return res.status(404).json({ error: 'Bài viết không tồn tại' });
    }
    
    // Lấy article với views mới để trả về
    const selectQuery = 'SELECT * FROM articles WHERE slug = ?';
    db.query(selectQuery, [slug], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Lỗi khi lấy thông tin bài viết' });
      }
      
      res.json(results[0]);
    });
  });
});

// Giữ route POST để backward compatibility (nếu cần)
router.post('/:slug/view', (req, res) => {
  const slug = req.params.slug;
  const query = 'UPDATE articles SET views = COALESCE(views, 0) + 1 WHERE slug = ?';
  
  db.query(query, [slug], (err, results) => {
    if (err) return res.status(500).json({ error: 'Lỗi khi cập nhật views' });
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Bài viết không tồn tại' });
    }
    
    res.json({ message: 'Đã tăng views' });
  });
});

module.exports = router;
