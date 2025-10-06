import React, { useState } from 'react'
import './LogInpop.css'
import { assets } from '../../../../assets/admin_assets/frontend_assets/assets'
const LogInPop = ({ setShowLogIn }) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div className='login-popup'>
            <form action="" className='login-container'>
                <div className="login-popup-tittle">
                    <h2>
                        {currState}
                    </h2>
                    <img onClick={() => {
                        setShowLogIn(false)
                    }} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? <></> : <input type="text " placeholder='your name' required />}
                    <input type="email" placeholder='your Email' required />
                    <input type="password" placeholder='Passoword' required />
                </div>
                <button>{currState === "sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, i agree to the terms of use & privacy Policy.</p>
                </div>
                {currState === 'Login' ? <p>Create a new account? <span onClick={() => {
                    setCurrState("Sing Up")
                }}>Click here</span></p> : <p>Al ready have an account? <span onClick={() => {
                    setCurrState("Login")
                }}>Login here</span></p>}
            </form>
        </div>
    )
}

export default LogInPop