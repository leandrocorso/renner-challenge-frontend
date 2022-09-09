import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadProducts } from '../store/productsSlice'

import { Banner, Carousel, Template } from '../components'

const Home = () => {

    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  return <Template title="Produtos">
    
    <h1>Homepage</h1>
    
    <p>Seguindo os requisitos do teste, a homepage deve conter:</p>
    
    <ol>
        <li><s>Um carrossel com a opção adicionar ao carrinho;</s></li>
        <li><s>Um banner com o produto com o preço mais baixo;</s></li>
        <li>Um carrossel com todos os produtos;</li>
        <li><s>Validação de estoque (se não houver em estoque, remover a opção de adicionar ao carrinho.</s></li>
    </ol>

    <Carousel/>

    <Banner/>

  </Template>
}

export default Home