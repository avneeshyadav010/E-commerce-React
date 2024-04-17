import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { cartAction } from "../store/cart";
import { wishListaction } from "../store/wishlist";
import { itemsAction } from "../store/items";

const Login = () => {
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();
    const users = useLoaderData();
    const dispatch = useDispatch();
    console.log("users", users);
    const handleLogin = (e) => {
        e.preventDefault();
        if (email.current.value == "") {
            alert("Please enter your email address");
            return;
        }
        if (password.current.value == "") {
            alert("Please enter your correct password");
            return;
        }
        const userName = users.filter(user => {
            if (user.email == email.current.value && user.password == password.current.value)
                return user;
            else
                return 0;
        })
        if (userName == 0) {
            alert("Invalid Credentials");
            email.current.value = "";
            password.current.value = "";
        }
        else {
            alert("Succesfully Login");
            console.log("userName", userName[0].cart)
            localStorage.setItem("token", true);
            navigate('/');
            dispatch(itemsAction.initialItems(userName[0]))
            dispatch(cartAction.addToCart(userName[0].cart))
            dispatch(wishListaction.addtoWishList(userName[0].wishList))
        }
    }
    const handleSignUp = () => {
        navigate('/sign-up')
    }
    return (
        <>
            <div className="sign-up">
                <form onSubmit={handleLogin}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" ref={password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="align-button">
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div className="align-button">
                    <button onClick={handleSignUp} className="btn btn-primary margin-space">Sign Up</button>
                    </div>
                </form>
               

            </div>

        </>
    )
}

export const UserData = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    return data;
}

export default Login;