import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../../../assets/admin_assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({ setShowLogIn }) => {

    const [menu, setMenu] = useState("");
    const [SearchItem, setSearchItem] = useState('')
    const [showSearch, setShowSearch] = useState(false);
    const { getTotal } = useContext(StoreContext)
    const navigate = useNavigate();

    const handleSearch = () => {
        if (SearchItem.trim() !== "") {
            navigate(`/search?query=${SearchItem}`);
            setShowSearch(false); // hide input after search
        }
    }
    return (
        <div className='navBar'>
            <Link to='/'><img src={assets.logo} className='logo' /></Link>
            <ul className='navBarMenu'>
                <Link to='/'><li className={menu === "Home" ? "active" : ""} onClick={() => { setMenu("Home") }}>Home</li></Link>
                <Link to='/menu'><li onClick={() => { setMenu("Menu") }} className={menu === "Menu" ? "active" : ""}>Menu</li></Link>
                <Link to='MobileApp'> <li onClick={() => { setMenu("Mobile-app") }} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</li></Link>
                <Link to='ContactUs'><li onClick={() => { setMenu("Contact Us") }} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li></Link>
            </ul>
            <div className='navbar-right'>
                <div className="navbar-search">
                    {!showSearch ? (
                        // 🔍 Show search icon initially
                        <img
                            src={assets.search_icon}
                            alt="Search"
                            onClick={() => setShowSearch(true)} // when clicked, show input instead
                            style={{
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                            }}
                        />
                    ) : (
                        // 🧭 Show input when icon is clicked
                        <input
                            type="text"
                            placeholder="Search menu..."
                            value={SearchItem}
                            onChange={(e) => setSearchItem(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            onBlur={() => setShowSearch(false)} // when user clicks outside, hide input again
                            style={{
                                width: "180px",
                                padding: "8px 12px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                fontSize: "14px",
                                outline: "none",
                                transition: "all 0.3s ease",
                            }}
                            autoFocus
                        />)}
                </div>
                <div className='navbar-search-icon'>
                    <Link to='Cart' ><img src={assets.basket_icon} /></Link>
                    <div className={getTotal() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => {
                    setShowLogIn(true)
                }}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar