const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Middleware để parse body
app.use(bodyParser.json());

// Đăng ký các route
const articlesRoutes = require('./articles');
app.use('/api/articles', articlesRoutes);

const categoriesRoutes = require('./categories');
app.use('/api/categories', categoriesRoutes);

const adminAuthRoutes = require('./adminAuth');
app.use('/api/admin', adminAuthRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
