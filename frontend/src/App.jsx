import { Outlet } from "react-router-dom"
import Header from "./Component/header";
import Footer from "./Component/footer";

const App=()=>{
  return(
      <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer/>

      </>
  )
}  

export default App
