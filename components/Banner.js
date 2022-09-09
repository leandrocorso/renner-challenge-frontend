import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/productsSlice'

import styled from 'styled-components'
import Image from 'next/image'
import { Loader } from '.'

import { formatCurrency } from '../utils'

const BannerWrapper = styled.div`${({theme: { colors, spacing }}) => `
    display: block;
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-bottom: ${spacing.defaultMargin};
    background-color: ${colors.redDark};
    
    a {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        &:hover {
            text-decoration: none;
        }
    }
`}`

const ImageWrapper = styled.div`${({theme: { colors }}) => `
    width: 40%;
    transform: rotate(-10deg);
    margin-left: -20px;
    margin-right: 10%;
    box-shadow: 5px 5px 15px 0 ${colors.black50};
    z-index: 1;
`}`

const TextWrapper = styled.div`${({theme: { colors, spacing }}) => `
    width: 50%;
    height: 100%;
    padding: ${spacing.defaultPadding} 0;

    p {
        margin-bottom: 0;
        color: ${colors.white};
        line-height: 1;
    }

    .title {
        font-size: 24px;
    }

    .price {
        position: absolute;
        bottom: -${spacing.defaultPadding};
        right: -${spacing.defaultPadding};
        width: 100%;
        text-align: right;
        font-size: 30px;
        font-weight: 700;
        padding: ${spacing.defaultPadding};
        padding-right: calc(${spacing.defaultPadding} * 2);
        background-color: ${colors.red};
        transform: rotate(-10deg);
    }
`}`

const Banner = () => {

    const {isLoading, data} = useSelector(selectProducts)
    const [cheaperProduct, setCheaperProduct] = useState({});

    useEffect(() => {
        if (data.length > 0) {

            const cheaperProductFinded = data.reduce((acc, product) => {
                if (acc.price > product.price) {
                    return product
                } else {
                    return acc
                }
            })
            setCheaperProduct(cheaperProductFinded)
        }
    }, [data])


    if (isLoading) {
        return <Loader/>
    }

    const { id, title, price, image } = cheaperProduct

    return <BannerWrapper>
        {
            <a href={`/products/${id}`}>
                <ImageWrapper>
                    { image && <Image 
                        src={image} 
                        alt={title}
                        width={300}
                        height={700}
                        objectFit={'cover'}
                        /> }
                </ImageWrapper>

                <TextWrapper>
                    <p className='title'>{title}</p>
                    <p className='price'>R$ { formatCurrency(price) }</p>
                </TextWrapper>
            </a>
        }
    </BannerWrapper>

}

export default Banner