const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM admins WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Lỗi máy chủ' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Wrong Username or Password' });
    }

    res.json({ message: 'Đăng nhập thành công' });
  });
});

module.exports = router;
