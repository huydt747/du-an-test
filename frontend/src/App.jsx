import { Outlet } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import HomeFunction from "./components/homefunction";

const App=()=>{
  return(
      <>
      <Header />
      {/* <NavBar/> */}
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />

      </>
  )
}  

export default App
