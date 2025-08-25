import { useAuth } from "../auth/Auth";
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchStudent, signin, signUp } from "../api/Student";

function Login() {

    const { isLoggedIn, setIsloggedIn } = useAuth();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [newRegister, setNewRegister] = useState(false);
    const isloged = useSelector((state) => state.student.isAuthenticated)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const newFetch = () => {
        setNewRegister(pre => !pre);
    }

    const signUpUser = (data) => {
        dispatch(signUp(data));
        dispatch(fetchStudent())
        setNewRegister(pre => !pre);
        reset();
    };
    console.log('status', isloged);
    const signIn = (data) => {
        dispatch(signin(data));
        setIsloggedIn(true);
        console.log(isLoggedIn);
        if (isLoggedIn) {
            console.log('true');

        }
        navigate('/list')
        reset()
    };

    return (
        <>
            {/* <div className="login">
                <button className="btn" onClick={handleLogIn}>Login</button>
            </div> */}

            <h2>User Login</h2>
            <form>
                <>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        {...register("name", { required: "Required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </>
                <>
                    {
                        newRegister &&
                        <input type="text" id="id" placeholder="User ID" {...register("id", { required: "Required" })} />
                    }
                    {errors.id && <p>{errors.id.message}</p>}
                </>
                {
                    newRegister &&
                    <input type="number" id="age" placeholder="Age" {...register("age")} />
                }
                <>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register("password", { required: "Required" })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </>
                <>
                    {
                        !newRegister &&
                        <span style={{ color: 'blue', fontSize: '14px', textDecoration: 'underline' }} onClick={newFetch}>Create Account</span>
                    }
                    {
                        newRegister &&
                        <span style={{ color: 'blue', fontSize: '14px', textDecoration: 'underline' }} onClick={newFetch}>Sign In</span>
                    }
                </>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    {
                        newRegister &&
                        <button type="submit" onClick={handleSubmit(signUpUser)}>
                            Sign Up
                        </button>
                    }
                    {
                        !newRegister &&
                        <button type="submit" onClick={handleSubmit(signIn)}>
                            Login
                        </button>
                    }
                </div>
            </form>

        </>
    )

}

export default Login;