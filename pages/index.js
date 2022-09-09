import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadProducts } from '../store/productsSlice'

import { Banner, Carousel, Slider, Template } from '../components'

const Home = () => {

    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  return <Template title="Produtos">
    
    <h1>Homepage</h1>
    
    <h2>Item 1: Carrossel com opção de adicionar ao carrinho</h2>
    <Carousel/>
    <p>Para consumir os dados eu busquei o estado global gerado pelo <i>Redux</i> desacoplado do componente pai. Assim irá funcionar em qualquer página que for inserido que tiver acesso ao <i>Store</i>.</p>
    <p>Neste carrossel fiz um componente com uma única imagem aparecendo por vez, baseado na opacidade dos elementos</p>
    <p>Dá para setar o tempo com a variável <i>time</i> dada como parâmetro, porém deixei padrão o delay de 5000ms</p>
    <p>Usei a propriedade <i>background-image</i> do <i>CSS</i> para acomodar a imagem.</p>
    <p>O gerenciamento do carrinho está descrito no item 4.</p>

    <h2>Item 2: Banner com o produtos mais barato</h2>
    <Banner/>
    <p>O componente do banner percorre o <i>Store</i> de produtos usando o método <i>reduce</i> do javascript. Em cada iteração ele retorna o objeto com o menor valor na chave <i>&ldquo;price&rdquo;</i>.</p>
    <p>Para a imagem do banner utilizei o componente de imagem do <i>Next.JS</i> para gerar uma versão otimizada.</p>

    <h2>Item 3: Carrossel com todos os produtos</h2>
    <Slider/>
    <p>Eu estou usando a mesma fonte de dados para o carrossel do item 1. No exercício não especifica critérios para exibição no componente anterior, então ambos recebem todos os produtos.</p>
    <p>Para criar um diferencial fiz um componente que funciona completamente diferente. Ao invés de usar uma transiçao baseada na opacidade de forma automática, neste é a posição horizontal que muda conforme a ação do usuário.</p>
    <p>O carregamento das imagens também está diferente pois usei a compactação do <i>Next.JS</i></p>
    <p>Outra diferença é que neste carrossel, ao clicar nas imagens a página do produto é exibida.</p>

    <h2>Item 4: Gerenciamento de estoque</h2>
    <p>Criei um <i>Reducer</i> específico para o carrinho de compras pois o teste não pedia alteração no banco de dados. Entendo que só dá para considerar o item fora do estoque para outros usuários depois que for efetuada a compra de fato, então deixei o gerenciamento a nível de <i>frontend</i> apenas.</p>
    <p>Colocando o carrinho num estado global eu também poderia fazer consultas em outros componentes, se fosse o caso.</p>
    <p>Ao adicionar um produto ao carrinho o componente vai verificar se ele já existe, caso positivo ele vai apenas somar o a quantidade do mesmo produto +1 dentro do <i>Store</i> do carrinho, caso contrário ele adiciona no <i>Store</i>.</p>
    <p>Ao atingir a quantidade máxima de items disponíveis no carrinho o botão não será mais renderizado pois ele verifica cada alteração feita no <i>Store</i>.</p>
    
  </Template>
}

export default Home