import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'



const Header = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.items)
  const cart = useSelector(store=> store.cart);
  console.log("CART",cart)
  console.log("USER",user)
  useEffect(()=>{
    const login = localStorage.getItem("token");
    if(login) {
      setAuth(true);
    }
  },[auth])
  const loginHandle = ()=> {
    const login = localStorage.getItem("token")
    if(login)
    navigate("/")
    else
    navigate('/login')
   
  }
  const signupHandle = ()=> {
    const login = localStorage.getItem("token")
    if(login)
    navigate("/")
    else
    navigate('/sign-up')
  }
  const logoutHandle = ()=> {
      // console.log("logout user",user);
      // const id = user.id;
      // const data = [...user];
      // data.cart = [...cart]
      // console.log("logout new data",data)
      // fetch(`http://localhost:3000/users/${id}`,{
      //   method: "PUT",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   }
      // })
      localStorage.removeItem("token");
      setAuth(false)
      console.log("Logout")
      navigate('/')
  }

    return (
        <>
        <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link to="/cart" className="nav-link px-2 text-white">Cart</Link></li>
          <li><Link to="/wishlist" className="nav-link px-2 text-white">Wishlist</Link></li>
          <li><Link to="/faq" className="nav-link px-2 text-white">FAQs</Link></li>
        </ul>

      

        <div className="text-end">
          <button type="button" onClick={loginHandle} className={`btn btn-outline-light me-2 ${auth ? "hidden":""}`}>Login</button>
          <button type="button" onClick={signupHandle} className={`btn btn-warning ${auth ? "hidden": ""}`}>Sign-up</button>
          <button type="button" onClick={logoutHandle} className={`btn btn-warning ${auth ? "" :"hidden"}`}>Logout</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}
export default Header