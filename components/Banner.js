import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/productsSlice'

import styled from 'styled-components'
import { AddToCartButton, Loader } from '.'

const BannerWrapper = styled.div`${({theme}) => `

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

    if (!data.length) {
        return <h2>Não há imagens para exibir</h2>
    }

    return <BannerWrapper>
        {
            <p>{cheaperProduct.title}</p>
        }
    </BannerWrapper>

}

export default Banner