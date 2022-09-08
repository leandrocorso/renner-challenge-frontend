import { Template, Slider } from '../components'

const Home = () =>
  <Template title="Produtos">
    
    <h1>Homepage</h1>
    
    <p>Seguindo os requisitos do teste, a homepage deve conter:</p>
    
    <ol>
      <li>Um carrossel com a opção adicionar ao carrinho;</li>
      <li>Um banner com o produto com o preço mais baixo;</li>
      <li>Um carrossel com todos os produtos;</li>
      <li>Validação de estoque (se não houver em estoque, remover a opção de adicionar ao carrinho.</li>
    </ol>

    <Slider/>

  </Template>

export default Home