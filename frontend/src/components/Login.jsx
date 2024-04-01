import { Link } from 'react-router-dom';
import '/src/components/Login.css'
import axios from "axios"
import { useState,useEffect } from 'react';

const Login=()=>{

   
    return(
        <div className='loginBg'>
            <div className='loginBox'>

            <h1>Sign In</h1>
            <form>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email_ph" placeholder='Email or phone number'></input>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder='Password'></input>
            <button onClick={submit}>Sign In</button>
            <br/><p>OR</p><br/>

            </form> 


            </div>
            </div>
    )
}
export default Login;