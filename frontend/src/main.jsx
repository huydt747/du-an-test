import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App'
import TrangChu from "./pages/TrangChu";
import America from "./pages/America";
import Health from "./pages/Health";
import Us from "./pages/Us";
import Business from "./pages/Business";
import World from "./pages/World";
import Signin from "./pages/signin";
import ProfilePage from "./pages/profile";
import NewsletterSubscriptions from "./pages/subscription";
import Style from "./pages/Style";
import Entertainment from "./pages/Entertainment";
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
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
