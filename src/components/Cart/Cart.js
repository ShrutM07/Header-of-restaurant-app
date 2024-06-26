import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartCntx from '../../store/cart-context'
import CartContext from '../../store/cart-context';


const Cart = props => {
    const cartCntx = useContext(CartCntx);

    const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;
    const hasItems = cartCntx.items.length > 0;
    const cartItems =(
     <ul className={classes['cart-items']}>
        {cartCntx.items.map((item) =>(
         <li>{item.name} Price: {item.price} Quantity: {item.quantity}</li>
        ))}
        </ul>
    );


    return (
    <Modal onClose={props.onClose}>
       {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
                </button>
            {hasItems &&<button className={classes.button}>Order</button>}
        </div>
    </Modal> 
    );
};

export default Cart;