import React, { useContext } from 'react';
import './Header.css'
import logo from '../../Data/images/logo2.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { LoginContext, UserContext } from './../../App';
import { getAuth, signOut } from 'firebase/auth';

import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../Login/firebase.config';

initializeApp(firebaseConfig)
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoginContext)
    console.log(loggedInUser);
    const [cart, setCart] = useContext(UserContext);
    const navigate = useNavigate();

    const handleSignOut = (user) => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            const newUserInfo = {...user}
            newUserInfo.email = ""
            newUserInfo.name = ""
            newUserInfo.password = ""
            newUserInfo.success = false
            newUserInfo.error = ""
            setLoggedInUser(newUserInfo)
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container header">
                <div>
                    <img src={logo} alt="" width={180} />
                </div>
                <div>
                    <div style={{cursor: "pointer", display: "inline-block"}} onClick={()=>navigate('/cart')}>
                        <FontAwesomeIcon className='fontAwesome' icon={faCartShopping} /><span className='icon-span'>{cart.length}</span>
                    </div>
  
                    <Link to={'/login'}>
                        <button className='login'>{loggedInUser.email ? loggedInUser.name : "Login"}</button>
                        <button onClick={()=>handleSignOut(loggedInUser)} className='signUp'>{loggedInUser.email ? "Sign Out" : "Sign Up"}</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;