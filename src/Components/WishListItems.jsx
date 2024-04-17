import { useSelector } from "react-redux"
import WishListItem from "./WishListItem";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const WishList = () => {
    const items = useSelector(store => store.wishList);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const login  = localStorage.getItem("token");
        if(login)
        {
            setAuth(true);
            // navigate('/wishlist')
        }
        else
        {
            navigate('/login')
        }
    },[auth, navigate])
    return (
        <>
        { items.length == 0 && <h1>Your WishList is empty</h1>}
        { auth && items.length != 0 &&<div>
            <h1>My WishList</h1>
        {items.map((item)=> <WishListItem key={item.id} items={item}></WishListItem>)}
        </div>}  
        </>
    )
}

export default WishList;