import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './Components/SignUp.jsx'
import Login from "./Components/Login.jsx"
import ProductDetails, { ProductDetailsLoader } from './Components/ProductDetails.jsx'
import CartList from './Components/CartList.jsx'
import WishList from './Components/WishListItems.jsx'
import { UserData } from './Components/Login.jsx'
import ProductList from './Components/ProductList.jsx'
import Faq, { FaqLoader } from './Components/Faq.jsx'
import { Provider } from 'react-redux'
import itemStore from './store/index.js'

const router = createBrowserRouter([
  {path: "/", element: <App/>, 
  children: [
    {path: "/", element: <ProductList/>},
    {path: "/product/:id", element: <ProductDetails/>, loader: ProductDetailsLoader},
    {path: "/cart", element : <CartList/>},
    {path: "/wishlist", element : <WishList/>}
  ]},
  {path: "/sign-up", element: <SignUp/>},
  {path: "/login", element: <Login/>, loader: UserData},
  {path: "/faq", element: <Faq/>, loader: FaqLoader},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={itemStore}>
    <RouterProvider router={router} /> 
    </Provider>
  </React.StrictMode>,
)
