import React, { useContext, useState } from 'react';
import logo from '../../Data/images/logo2.png'
import './Login.css'
import { useForm } from 'react-hook-form';
import { confirmPasswordReset } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebase.config';
import { LoginContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

initializeApp(firebaseConfig)

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const auth = getAuth();

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        errorPass: ""
    });
    const [loggedInUser, setLoggedInUser] = useContext(LoginContext)

    const location = useLocation();
    const navigate = useNavigate();
    const redirectPath = location.state?.path || "/"

    const onSubmit = (event) => {
        const {email, password, ConfirmPassword, name} = event;

        if(newUser && event.email && event.password && event.password === event.ConfirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const newUserInfo = {...user}
                newUserInfo.error = ""
                newUserInfo.success = true
                newUserInfo.name = event.name
                newUserInfo.email = event.email
                newUserInfo.password = event.password
                newUserInfo.confirmPassowrd = event.confirmPassowrd
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo)
                navigate(redirectPath)
                // console.log(res);
                // console.log(user);
            })
            .catch((error) => {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false
                setUser(newUserInfo)
                // console.log(error.message);
            });
        };

        if(!newUser && event.email && event.password){
            signInWithEmailAndPassword(auth, event.email, event.password)
            .then((res) => {
                const newUserInfo = {...user}
                newUserInfo.email = event.email
                newUserInfo.password = event.password
                newUserInfo.error = ""
                newUserInfo.success = true
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo)
                // navigate(redirectPath)
            })
            .catch((error) => {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false
                setUser(newUserInfo)
                console.log(error.message);
            });
        }
        event.preventDefault();
    }
    // console.log(watch("example"));

    return (
        <div className='container'>
            <div className="form-aria">
                <img src={logo} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {newUser && <input type="text" placeholder='Name'{...register("name", { required: true })} />}
                                    {newUser && errors.name && <span>Name is required</span>}<br />
                        <input type="email" placeholder='Email'{...register("email", { required: true })} />
                        {errors.email && <span>Email is required</span>} <br />
                        <input type="password" placeholder='Password'{...register("password", { required: true })} />
                        {errors.password && <span>Password is required</span>} <br />
                    {newUser && <input type="password" placeholder='Confirm Password'{...register("ConfirmPassword", { required: true })} />}
                        {newUser && errors.ConfirmPassword && <span>Confirm Password is required</span>} <br />
                    <input className='signupBtn' type="submit" value={newUser? "Sign Up":"Sign in"} />
                </form>
                <p style={{color: "red", textAlign: "center"}}>{user.error}</p>
                <p style={{color: "red", textAlign: "center"}}>{user.errorPass}</p>
                {user.success && <p style={{color: "green", textAlign: "center"}}>User {newUser ? "Created" : "Login"} SuccessFully</p>}
                <div style={{cursor: "pointer"}} className='text-danger text-center' onClick={()=>setNewUser(!newUser)}><b>{newUser ? "Already have an account":"Create an account"}</b></div>
            </div>
        </div>
    );
};

export default Login;