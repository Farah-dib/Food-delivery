import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='header-content'>
                <h2>Order your favorite food Here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredents and culinary expertise. Our mssion is to saftiy your cravings and elevate your dining experience,one delicious meal at a time</p>
                <button onClick={() => {
                    navigate('/menu')
                }}>View Menu</button>
            </div>
        </div>
    )
}

export default Header