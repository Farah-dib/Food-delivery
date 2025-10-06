import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../../assets/admin_assets/frontend_assets/assets.js'

const ExploreMenu = ({ category, setGategory }) => {

    return (
        <div className='explore-menu' id='exploreMenu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredents and culinary expertise. Our mssion is to saftiy your cravings and elevate your dining experience,one delicious meal at a time</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => { setGategory(prev => prev === item.menu_name ? "All" : item.menu_name) }} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu