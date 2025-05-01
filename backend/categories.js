const express = require('express');
const router = express.Router();
const db = require('./db'); // Kết nối cơ sở dữ liệu

// API 1: Lấy danh sách tất cả categories
router.get('/', (req, res) => {
  const query = 'SELECT * FROM categories';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi lấy danh mục' });
    }
    res.json(results);
  });
});

// API 2: Lấy thông tin category theo ID
router.get('/:id', (req, res) => {
  const categoryId = req.params.id;
  const query = 'SELECT * FROM categories WHERE id = ?';
  db.query(query, [categoryId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi lấy danh mục' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Danh mục không tồn tại' });
    }
    res.json(results[0]);
  });
});

// API 3: Tạo mới category
router.post('/', (req, res) => {
  const { name } = req.body;
  const query = 'INSERT INTO categories (name) VALUES (?)';
  db.query(query, [name], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi tạo danh mục' });
    }
    res.status(201).json({ message: 'Danh mục đã được tạo', id: results.insertId });
  });
});

// API 4: Cập nhật thông tin category
router.put('/:id', (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  const query = 'UPDATE categories SET name = ? WHERE id = ?';
  db.query(query, [name, categoryId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi cập nhật danh mục' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Danh mục không tồn tại' });
    }
    res.json({ message: 'Danh mục đã được cập nhật' });
  });
});

// API 5: Xóa category
router.delete('/:id', (req, res) => {
  const categoryId = req.params.id;
  const query = 'DELETE FROM categories WHERE id = ?';
  db.query(query, [categoryId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi khi xóa danh mục' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Danh mục không tồn tại' });
    }
    res.json({ message: 'Danh mục đã được xóa' });
  });
});

// API 6: Lấy bài viết theo slug của category
router.get('/:slug/articles', (req, res) => {
    const categorySlug = req.params.slug;
  
    // Lấy id của category từ slug
    const categoryQuery = 'SELECT id FROM categories WHERE slug = ?';
    db.query(categoryQuery, [categorySlug], (err, categoryResults) => {
      if (err) {
        return res.status(500).json({ error: 'Lỗi khi lấy category' });
      }
      if (categoryResults.length === 0) {
        return res.status(404).json({ error: 'Danh mục không tồn tại' });
      }
  
      const categoryId = categoryResults[0].id;
  
      // Lấy các bài viết từ category id
      const articlesQuery = `
        SELECT a.* 
        FROM articles a
        JOIN article_categories ac ON a.id = ac.article_id
        WHERE ac.category_id = ?
      `;
      db.query(articlesQuery, [categoryId], (err, articlesResults) => {
        if (err) {
          return res.status(500).json({ error: 'Lỗi khi lấy bài viết' });
        }
        res.json(articlesResults);
      });
    });
  });

  // Thêm API để thêm bài viết vào danh mục
router.post('/:id/articles', (req, res) => {
    const categoryId = req.params.id;
    const { article_id } = req.body;
    
    const query = 'INSERT INTO article_categories (article_id, category_id) VALUES (?, ?)';
    db.query(query, [article_id, categoryId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Lỗi khi thêm bài viết vào danh mục' });
      }
      res.status(201).json({ message: 'Bài viết đã được thêm vào danh mục' });
    });
  });
  
module.exports = router;
