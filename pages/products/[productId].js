import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProduct, selectProducts } from '../../store/productsSlice'
import { useRouter } from 'next/router'

import ReactHtmlParser from 'react-html-parser';
import { formatCurrency } from '../../utils'

import { AddToCartButton, Loader, Template } from '../../components'
import Image from 'next/image'


import styled from 'styled-components'
import Link from 'next/link';

const BreadCrumb = styled.ul`
    list-style: none;
    display: inline-flex;
    margin-left: 0;
    
    li {
        margin-bottom: 0;
        
        &:not(:last-child) {
            padding-right: 10px;
            margin-right: 10px;
            border-right: 1px solid #ccc;
        }
    }
`

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

const TextWrapper = styled.div`${({theme: {colors}}) => `
    width: 50%;

    .summary {
        font-size: 80%;
    }

    .price {
        font-size: 120%;
        font-weight: 700;
        color: ${colors.primary};
    }
`}`

const AddToCartButtonWrapper = styled.div`
    position: relative;
`

const Products = () => {

    const dispatch = useDispatch()

    const router = useRouter()
    const productId = router.query.productId

    const { current } = useSelector(selectProducts)

    useEffect(() => {
        productId && dispatch(loadProduct(productId))
    }, [dispatch, productId])

    const { 
        isLoading,
        title,
        image,
        summary,
        description,
        price,
        quantity
    } = current || {}

    if (isLoading) {
        return <Loader/>
    }

    return <Template title={title}>
    
        <h1>{title}</h1>

        <BreadCrumb>
            <li>
                <Link href={'/'}>
                    <a>home</a>
                </Link>
            </li>
            <li>
                <Link href={'/products'}>
                    <a>Produtos</a>
                </Link>
            </li>
        </BreadCrumb>

        <InfoWrapper>
            <div>
                <ImageWrapper>
                    { image && <Image 
                        src={image} 
                        alt={title} 
                        objectFit={'cover'}
                        layout={'fill'}
                        /> }
                </ImageWrapper>

                <TextWrapper>

                    <div className="summary">
                        {ReactHtmlParser(summary)}
                    </div>
                    
                    <p className="price">
                        R$ {formatCurrency(price)}
                    </p>

                    <AddToCartButtonWrapper>
                        <AddToCartButton id={productId} quantity={quantity} />
                    </AddToCartButtonWrapper>

                </TextWrapper>
            </div>            
        </InfoWrapper>
        
        <h2>Descrição</h2>
        <div className='description'>{ReactHtmlParser(description)}</div>

    </Template>
}

export default Products