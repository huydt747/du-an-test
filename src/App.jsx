import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ArticleDetail from './pages/ArticleDetail';
import AdminPage from './pages/AdminPages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:slug" element={<Category />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/edit/:id" element={<AdminPage />} />  
        <Route path="/admin/edit/:slug" element={<AdminPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;