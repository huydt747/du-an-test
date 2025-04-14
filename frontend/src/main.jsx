import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App'
import TrangChu from "./trangchu/TrangChu";
import America from "./world/America";
import Health from "./health/Health";
import Us from "./US/Us";
import Business from "./business/business";
import World from "./world/World";
import Signin from "./account/signin";
import ProfilePage from "./account/profile";
import NewsletterSubscriptions from "./account/subscription";
import Style from "./Style/Style";
import Entertainment from "./entertainment/Entertainment";
import ArticlePage from "./detail-news/articles";
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
        path:"/sign-in",
        element: <Signin/>,
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
        path:"/business",
        element: <Business/>,
      },
      {
        path:"/world",
        element: <World/>,
      },
      {
        path:"/style",
        element: <Style/>,
      },
      {
        path:"/entertainment",
        element: <Entertainment/>,
      },
      {
        path:"/account/settings",
        element: <ProfilePage/>,
      },
      {
        path:"/newsletters",
        element: <NewsletterSubscriptions/>,
      },
      {
        path:"/articles",
        element: <ArticlePage/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
