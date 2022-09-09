import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/productsSlice'

import styled from 'styled-components'
import { AddToCartButton, Loader } from '.'

const CarouselWrapper = styled.div`${({width=400, height=600}) => `
    width: ${width}px;
    height: ${width / 1.33}px;
    position: relative;
`}`

const ImgWrapper = styled.div`${({bgImage, isActive}) => `
    opacity: ${isActive ? '1' : '0'};
    position: absolute;
    width:100%;
    height: 100%;
    background: url(${bgImage}) center no-repeat;
    background-size: cover;
    z-index: ${isActive ? '1' : '-1'};
    transition: .5s
`}`

const Carousel = ({time = 5000}) => {

    const {isLoading, data} = useSelector(selectProducts)

    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        activeImage >= (data.length-1)
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => nextImage(), time)
        return () => clearInterval(interval)
    }, [nextImage])

    if (isLoading) {
        return <Loader/>
    }

    if (!data.length) {
        return <h2>Não há imagens para exibir</h2>
    }

    return <CarouselWrapper>
        { 
            data.map(({id, image, quantity} , index) => {
                              
                if (id) {
                    return <ImgWrapper 
                        key={index} 
                        bgImage={image} 
                        isActive={index === activeImage}
                        >
                            <AddToCartButton id={id} quantity={quantity}/>
                        </ImgWrapper>
                }
            })
        }
    </CarouselWrapper>

}

export default Carousel