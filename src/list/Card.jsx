import { useDispatch, useSelector } from 'react-redux';
import './Card.css'
import { useEffect } from 'react';
import { fetchList } from '../api/Fetch';
import { useAuth } from '../auth/Auth';
import { Navigate } from 'react-router-dom';
import { addToCart } from '../redux/Cart';

function Card() {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch]);

    const handleAddToCart = (items) => {
        dispatch(addToCart(items))
    }

    const getQuantity = (id) => {
        return cartItems.find(item => item?.id === id)?.quantity;
    }

    return (
        <div className='cont'>
            {
                items.map((item) => (
                    <div className="card" key={item.id}>
                        <>
                            {
                                getQuantity(item?.id) ?
                                    <span className='quantity'>{getQuantity(item?.id)}</span> : ''
                            }
                            <img src={item.image} className="logo react" alt="React logo" />
                            <div className="detail">
                                <h4>{item.title}</h4>
                                <p>Rs.{item.price}</p>
                            </div>
                            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;