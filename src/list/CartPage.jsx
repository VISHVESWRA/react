// src/pages/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/Cart';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';

function CartPage() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();
    const cartItems = useSelector((state) => state.cart.items);

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            { cartItems.map(item => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>Qty: {item.quantity}</p>
                    <p>Rs.{item.price * item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))}
            <hr />
            <h3>Total: Rs.{total}</h3>
            <button onClick={() => dispatch(clearCart(cartItems))}>Checkout</button>

        </div>
    );
}

export default CartPage;
