import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { menu_list } from '../../../../assets/admin_assets/frontend_assets/assets.js';
import { StoreContext } from '../../Context/StoreContext';

const SearchResults = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('query')?.toLowerCase() || "";

    const { CartItems } = useContext(StoreContext);

    // Filter all menu items that match the search query
    const menuResults = menu_list.filter(item =>
        item.menu_name.toLowerCase().includes(query)
    );

    // Get all items in the cart that match the search query
    const cartResults = Object.keys(CartItems)
        .filter(id => {
            const cartItem = menu_list.find(item => item.id === id);
            return cartItem && cartItem.menu_name.toLowerCase().includes(query);
        })
        .map(id => {
            const cartItem = menu_list.find(item => item.id === id);
            return { ...cartItem, quantity: CartItems[id] };
        });

    // Merge results (optional: remove duplicates if menu item is already in cart)
    const allResults = [...menuResults];

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>

            {cartResults.length > 0 && (
                <>
                    <h3>Items in your Cart</h3>
                    {cartResults.map(item => (
                        <div key={item.id}>
                            <p>{item.menu_name} - Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </>
            )}

            {menuResults.length > 0 && (
                <>
                    <h3>All Menu Items</h3>
                    {menuResults.map(item => (
                        <div key={item.id}>
                            <p>{item.menu_name}</p>
                        </div>
                    ))}
                </>
            )}

            {cartResults.length === 0 && menuResults.length === 0 && (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
