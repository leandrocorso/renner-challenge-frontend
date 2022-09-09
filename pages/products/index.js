import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadProducts } from '../../store/productsSlice'

import { Slider, Template } from '../../components'

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProducts())
    }, [dispatch])

    return <Template title="Produtos">
    
        <h1>Produtos</h1>
        <p>Clique sobre um dos produtos no carrossel abaixo para abrir os detalhes.</p>
    
        <Slider/>

    </Template>
}

export default Products