import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    // const cart = [];
    // const wishList = [];
    // const fname = useRef();
    // const email = useRef();
    // const password = useRef();
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const user = {
    //         id: Date.now(),
    //         fname: fname.current.value,
    //         email: email.current.value,
    //         password: password.current.value,
    //         cart: cart,
    //         wishList: wishList
    //     }
    //     await fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         body: JSON.stringify(user),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     }).then(response => response.json())
    //         .then(() => {
    //             localStorage.setItem("token",true)
    //             navigate('/')
    //             // console.log(data)
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    //     fname.current.value = "";
    //     email.current.value = "";
    //     password.current.value = "";
    // }
    const handleLogin = () => {
        navigate('/login')
    }

    const initialValue = { username: "", email: "", password: "" };
    const [values, setValues] = useState(initialValue);
    const [error, setError] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    useEffect(() => {
        console.log(error)
        if (Object.keys(error).length == 0 && isSubmit) {
            console.log(values);
            const user = { ...values, id: Date.now() }
            fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(response => response.json())
                .then(() => {
                    localStorage.setItem("token", true)
                    navigate('/')
                    // console.log(data)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

    }, [error])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validat(values));
        setSubmit(true)
    }
    const validat = (value) => {
        const error = {};
        if (!value.username)
            error.username = "Username can not be empty";
        if (!value.email)
            error.email = "Email can not be empty";
        if (value.password.length < 4)
            error.password = "Password should be greater than 4";
        return error
    }
    return (
        <>
            <div className="sign-up">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputfullanme" className="form-label">Full Name</label>
                        <input type="text" name="username" value={values.username} onChange={handleChange} className="form-control" id="exampleInputfullanme" aria-describedby="emailHelp" />
                        <p>{error.username}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' value={values.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <p>{error.email}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' value={values.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                        <p>{error.password}</p>
                    </div>
                    <div className="align-button">
                        <button type="submit" className="btn btn-primary">Sign UP</button>
                    </div>
                    <div className="align-button">
                        <button onClick={handleLogin} className="btn btn-primary margin-space">Login</button>
                    </div>

                </form>


            </div>

        </>
    )
}
export default SignUp;