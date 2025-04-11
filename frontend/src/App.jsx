import { Outlet } from "react-router-dom"
import Header from "./Component/header";



const App=()=>{
  return(
      <>
      <Header />

      <div className="wrapper">
        <Outlet />
      </div>
      

      </>
  )
}  

export default App
