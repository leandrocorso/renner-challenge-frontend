import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProduct, selectProducts } from '../../store/productsSlice'
import { useRouter } from 'next/router'

import ReactHtmlParser from 'react-html-parser';
import { formatCurrency } from '../../utils'

import { Loader, Template } from '../../components'
import Image from 'next/image'


import styled from 'styled-components'

const InfoWrapper = styled.div`${({theme: {colors, spacing}}) => `
    position: relative;
    border-bottom: 1px solid ${colors.grayLight};
    padding-bottom: ${spacing.defaultPadding};
    margin-bottom: ${spacing.defaultMargin};

    > div {
        display: flex;
        gap: 20px;
    }
`}`
    
const ImageWrapper = styled.div`${({theme: {spacing}}) => `
    position: relative;
    width: 50%;
    height: 300px;
`}`

const TextWrapper = styled.div`${({theme: {spacing}}) => `
    width: 50%;

    .summary {
        font-size: 80%;
    }

    .price {

    }
`}`

const Products = () => {

    const dispatch = useDispatch()

    const router = useRouter()
    const productId = router.query.productId

    const { current } = useSelector(selectProducts)

    useEffect(() => {
        productId && dispatch(loadProduct(productId))
    }, [dispatch, productId])

    const { isLoading, title, image, price, summary, description } = current || {}

    if (isLoading) {
        return <Loader/>
    }

    return <Template title={title}>
    
        <h1>{title}</h1>

        <InfoWrapper>
            <div>
                <ImageWrapper>
                    <Image 
                        src={image} 
                        alt={title} 
                        objectFit={'cover'}
                        layout={'fill'}
                        />
                </ImageWrapper>

                <TextWrapper>
                    <div className="summary">
                        {ReactHtmlParser(summary)}
                    </div>
                    
                    <p className="price">
                        R$ {formatCurrency(price)}
                    </p>
                </TextWrapper>
            </div>            
        </InfoWrapper>
        
        

        <h2>Descrição</h2>
        <div className='description'>{ReactHtmlParser(description)}</div>

    </Template>
}

export default Products