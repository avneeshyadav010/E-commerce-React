import { useSelector } from "react-redux"
import Cart from "./Cart"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const items = useSelector(store => store.cart)
    useEffect(()=>{
        const login  = localStorage.getItem("token");
        if(login)
        {
            setAuth(true);
            // navigate('/cart')
        }
        else
        {
            navigate('/login')
        }
    },[auth, navigate])
    
    return (
        <>
        { items.length == 0 && <h1>Your cart is empty</h1>}
        { auth && items.length != 0 && <div>
            <h1>Total Amount: ${items.reduce((total,item)=> total + item.price,0)}</h1>
        {items.map((item)=> <Cart key={item.id} items={item}></Cart>)}
        </div>}
        
        </>
    )
}



export default CartList;