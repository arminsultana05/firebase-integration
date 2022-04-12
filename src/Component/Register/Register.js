import React from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Register.css'

const Register = () => {
    const {signInWithGoogle} = useFirebase();
    const navigate = useNavigate();
    return (
        <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Register</h1>
        <form >
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='text' name='email' id='email' />
            </div>
          
              <p className='error'>
                <AiOutlineExclamationCircle /> 
              </p>
            
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
               
                name='password'
                id='password'
              />
            </div>
         
              <p className='error'>
                <AiOutlineExclamationCircle /> 
              </p>
         
          </div>
          <button  type='submit' className='auth-form-submit'>
            Register
          </button>
        </form>
        <p className='redirect'>
          New to Tech Geeks?{" "}
          <span onClick={() => navigate("/login")}>Create New Account</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button  className='google-auth' >
            <img src='' alt='' />
            <p  onClick={signInWithGoogle}> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
    );
};

export default Register;