import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Component/header";
import Footer from "./Component/footer";

const App = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === "/sign-in";

  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      {!isSignInPage && <Footer />}
    </>
  );
};

export default App;