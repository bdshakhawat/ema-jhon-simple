import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((total, prd) => total + prd.price,0)
    
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
            
        </div>
    );
};

export default Cart;