import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { CartItems, food_list, removeFromCart, getTotal } = useContext(StoreContext)
    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (CartItems[item._id] > 0) {
                        return (
                            <div>
                                <div key={item._id} className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{CartItems[item._id]}</p>
                                    <p>${item.price * CartItems[item._id]}</p>
                                    <p className="remove-btn" onClick={() => removeFromCart(item._id)}>X</p>
                                </div>
                                <hr />
                            </div>
                        )
                    } return null
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart total</h2>
                    <div><div className="cart-totaldetails">
                        <p>SubTotal</p>
                        <p>${getTotal()}</p>
                    </div>
                        <div className="cart-totaldetails">
                            <p>Delivery Fees</p>
                            <p>${getTotal() === 0 ? 0 : 2}</p>
                        </div>
                        <div className="cart-totaldetails">
                            <b>Total</b>
                            <b>${getTotal() === 0 ? 0 : getTotal() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/Order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>If you have a promo code, enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promotr code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
