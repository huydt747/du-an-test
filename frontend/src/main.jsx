import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import TrangChu from "./pages/TrangChu.jsx";
import Business from "./pages/business.jsx";
import Signin from "./pages/signin.jsx";
import Tech from "./pages/tech.jsx";
import Media from "./pages/media.jsx";
import Calculators from "./pages/calculators.jsx";
import Videos from "./pages/videos.jsx";
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
        path:"/business",
        element: <Business/>,
      },
      {
        path:"/signin",
        element: <Signin/>,
      },
      {
        path:"/tech",
        element: <Tech/>,
      },
      {
        path:"/media",
        element: <Media/>,
      },
      {
        path:"/calculators",
        element: <Calculators/>,
      },
      {
        path:"/videos",
        element: <Videos/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
