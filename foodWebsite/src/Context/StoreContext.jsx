import { createContext, useState } from "react";
import { food_list } from '../../../assets/admin_assets/frontend_assets/assets'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [CartItems, setCartItem] = useState({})
    const addToCart = (itemId) => {
        if (!CartItems[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    // Total Price
    const getTotal = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = food_list.find((product) =>
                    product._id === item);
                totalAmount += itemInfo.price * CartItems[item]
            }
        }
        return totalAmount;
    }
    const contextValue = {
        food_list,
        CartItems,
        setCartItem, addToCart, removeFromCart, getTotal
    }
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
