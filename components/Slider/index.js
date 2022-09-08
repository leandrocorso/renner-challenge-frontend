import { useState, useEffect } from "react"
import styled from "styled-components"
import { AddToCartButton } from '../'

const SliderWrapper = styled.div`${({width=400, height=600}) => `
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
    z-index: ${isActive ? '1' : '0'};
    transition: .5s
`}`

const Slider = ({time = 5000}) => {

    const [activeImage, setActiveImage] = useState(0);
    const [slideTime] = useState(time)

    const data = [
        {
            id: '1',
            image: "https://firebasestorage.googleapis.com/v0/b/renner-challenge.appspot.com/o/macaquinho-oncinha.jpg?alt=media&token=d477cf22-484e-4cb4-8fbb-4528174e4c3e",
            quantity: 1
        },{
            id: '5',
            image: "https://firebasestorage.googleapis.com/v0/b/renner-challenge.appspot.com/o/camiseta-cav-zod.jpg?alt=media&token=423a3e63-1e79-4697-8600-d8f9c9b0daf9",
            quantity: 5
        },{
            id: '7',
            image: "https://firebasestorage.googleapis.com/v0/b/renner-challenge.appspot.com/o/pijama-unicornio.jpg?alt=media&token=4eb0239b-eec4-4e4c-9e32-06190efedb5a",
            quantity: 1
        },{
            id: '50',
            image: "https://firebasestorage.googleapis.com/v0/b/renner-challenge.appspot.com/o/pijama-panda.jpg?alt=media&token=3daa4770-7801-4bc4-a442-edde6f074f0f",
            quantity: 2
        }
    ]

    const nextImage = () => {
        activeImage >= (data.length-1)
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => nextImage(), slideTime)
        return () => clearInterval(interval)
    })

    return <SliderWrapper>
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
    </SliderWrapper>

}

export default Slider