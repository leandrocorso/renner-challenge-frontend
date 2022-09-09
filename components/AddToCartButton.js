import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, updateCart } from '../store/cartSlice'
import styled from 'styled-components'

import { Button } from '../components'

const StyledButtonWrapper = styled.div`${({theme: {colors, spacing}}) => `
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${colors.primary};
    color: ${colors.white};

    small {
        min-height: 40px;
        padding: ${spacing.defaultPadding}
    }
`}`

const AddToCartButton = ({id, quantity = 0}) => {

    const [itensEnabled, setItensEnabled] = useState(quantity)

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

    useEffect(() => {
        const itemOnCart = cartState.filter(item => item.id === id)[0]

        const quantityEnabled = itemOnCart
            ? quantity - itemOnCart.quantity
            : quantity

        setItensEnabled(quantityEnabled)

    }, [cartState, id, quantity])

    const enabledToAdd = () => {
        if (itensEnabled) {
            return <>
                <Button onClick={() => addItemToCart(id)}>Adicionar ao carrinho</Button>
                <small>Ítems disponíveis: {itensEnabled}</small>
            </>
        }
        return <small>Ítem indisponível</small>
    }

    return (
        <StyledButtonWrapper>
            { enabledToAdd() }
        </StyledButtonWrapper>
    )

}

export default AddToCartButton