
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user,haldleSignOut} =useFirebase()
    return (
        <div  className="header-title">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                   <Link to="/login">Login</Link>
                   <span>{user?.displayName && user.displayName}</span>
                   {
                       user?.uid?<button onClick={haldleSignOut}>Sign Out</button>:<Link to="/register">Register</Link>
                   }
                   
              
             

            </nav>
        </div>
    );
};

export default Header;