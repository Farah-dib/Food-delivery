import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../../../assets/admin_assets/frontend_assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {

    const { CartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img src={image} className="food-item-image" />
                {
                    !CartItems[id]
                        ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                        : <div className='food-item-counter' >
                            <img src={assets.remove_icon_red} onClick={() => { removeFromCart(id) }} alt="" />
                            <p>{CartItems[id]}</p>
                            <img src={assets.add_icon_green} onClick={() => { addToCart(id) }} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>

            </div>
        </div>
    )
}

export default FoodItem