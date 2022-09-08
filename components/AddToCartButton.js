import { useDispatch, useSelector } from 'react-redux';
import { selectCart, updateCart } from '../store/cartSlice';

const AddToCartButton = ({id, quantity = 0}) => {

    const dispatch = useDispatch()
    const cartState = useSelector(selectCart)

    const incrementQuantity = id => {
        const updatedCart = cartState.map(item => {
            if (item.id === id) {
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })
        dispatch(updateCart(updatedCart))
    }

    const addItemToCart = id => {
        const itemExists = cartState.find(item => item.id === id)

        if (itemExists) {
            incrementQuantity(id)
        } else {
            dispatch(updateCart([...cartState, {id, quantity: 1}]))
        }
    }

    if (quantity > 0) {
        return <>
                <button onClick={() => addItemToCart(id)}>Add to cart</button>
                <small>Ítems disponíveis: {quantity}</small>
            </>
    }
}

export default AddToCartButton