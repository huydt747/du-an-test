import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import TrangChu from "./pages/TrangChu.jsx";
import Business from "./pages/business.jsx";
import World from "./pages/World.jsx"
import America from "./pages/America.jsx";
import Health from "./pages/Health.jsx";
import Us from "./pages/Us.jsx";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Lỗi 404</div>,
    children: [
      {
        path:"/",
        element: <TrangChu/>,
      },
      {
        path:"/america",
        element: <America/>,
      },
      {
        path:"/health",
        element: <Health/>,
      },
      {
        path:"/us",
        element: <Us/>,
      },
      {
        path:"/world",
        element: <World/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
