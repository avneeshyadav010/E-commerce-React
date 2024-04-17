import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import itemStore from "./store";
import Header from "./Components/Header";
import './App.css'
import './modal.css'
import HeaderSlider from "./Components/HeaderSlider";
import { Outlet } from "react-router-dom"
// import { useEffect, useState } from "react";
function App() {
  // const [auth, setAuth] =useState(false);
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   const login = localStorage.getItem("token");
  //   console.log("login",login)
  //   if(login)
  //   {
  //     setAuth(true)
  //     navigate("/")
  //   }
  //   else{
  //     navigate("/login")
  //   }
   
  //   // console.log("login if")
  //   // console.log("login if after",login)
  // },[auth,navigate])
  return (
    <>
   <Provider store={itemStore}>
      <Header></Header>
      <HeaderSlider></HeaderSlider>
      <Outlet/>
    </Provider>
    </>
  )
}

export default App
