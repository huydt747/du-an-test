import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import TrangChu from "./pages/TrangChu";
import America from "./pages/America";
import Health from "./pages/Health";
import Us from "./pages/Us";
import Business from "./pages/Business";
import World from "./pages/World";
import Signin from "./pages/signin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TrangChu />} />
          <Route path="sign-in" element={<Signin />} />
          <Route path="america" element={<America />} />
          <Route path="health" element={<Health />} />
          <Route path="us" element={<Us />} />
          <Route path="business" element={<Business />} />
          <Route path="world" element={<World />} />
          <Route path="*" element={<div>Lỗi 404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
