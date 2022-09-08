import { useState, useEffect } from 'react';

const AddToCartButton = ({id, quantity = 0}) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const incrementQuantity = id => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return {...item, quantity: quantity + 1}
            }
            return item
        })
        setCart(updatedCart)
    }

    const addItemToCart = id => {
        if (!cart.lenght) {
            setCart({id, quantity:1})
        } else {   
            incrementQuantity(id)
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