import { Outlet } from "react-router-dom"

const App=()=>{
  return(
      <>
        <div className="wrapper">
          <Outlet />
        </div>
      </>
  )
}  

export default App
