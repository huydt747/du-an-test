import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Trangchu from "./Component/trangchu.jsx"
import Header from "./Component/header.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Lỗi 404</div>,
    children: [
      {
        path: "/",
        element: <Navigate to="/trangchu" replace />, 
      },
      {
        path:"/header",
        element: <Header/>,
      },
      {
        path:"/trangchu",
        element: <Trangchu/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
