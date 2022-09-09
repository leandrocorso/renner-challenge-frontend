import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/productsSlice'

import styled from 'styled-components'
import { Loader } from './'

const SliderWrapper = styled.div`${({ 
        theme: { spacing }, 
        width, 
        quant, 
        position
    }) => `
    width: ${width}px;
    height: ${width / quant}px;
    position:relative;
	overflow: hidden;
    margin-bottom: ${spacing.defaultMargin};
    z-index: 0;

    .image-container {
        position: absolute;
        left: ${position * (width / quant)}px;
        top: 0;
        transition: left .3s;

        ul {
            display: inline-flex;
	        list-style: none;
            margin-left: 0;
            margin-bottom: 0;

            li {
                width: ${width / quant}px;
                height: ${width / quant}px;
                background-color: blue;
                margin-bottom: 0;

                .image-wrapper {
                    position: absolute;
                    width: ${width / quant}px;
                    height: ${width / quant}px;
                }
            }
        }
    }
`}`

const NavWrapper = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    z-index: 1;
    margin-left: 0;
    margin-bottom: 0;

    li {
        position: absolute;
        display: none;

        &.enabled {
            display:block;
        }

        &.prev {
            left: 0
        }

        &.next {
            right: 0
        }
    }

`

const Slider = ({width = 440, quant = 3}) => {

    const [sliderPosition, setSliderPosition] = useState(0)
    const [previousEnabled, setPreviousEnabled] = useState()
    const [nextEnabled, setNextEnabled] = useState()

    const {isLoading, data} = useSelector(selectProducts)

    useEffect(() => {
        const limit = -(data.length - quant)
        setPreviousEnabled(sliderPosition < 0)
        setNextEnabled(sliderPosition > limit)
    },[sliderPosition, data.length, quant])

    const handleMoveSlider = (direction) => {
        if (direction === 'prev') {
            setSliderPosition( sliderPosition + 1 )
        } else {
            setSliderPosition( sliderPosition - 1 )
        }

    }

    if (isLoading) {
        return <Loader/>
    }

    if (!data.length) {
        return <h2>Não há imagens para exibir</h2>
    }

    return <SliderWrapper width={width} quant={quant} position={sliderPosition}>
        <div className='image-container'>
            <ul>
            { 
                data.map(({id, title, image} , index) => {
                                
                    if (id) {
                        return <li key={index}>
                            <a className='image-wrapper' href={`/products/${id}`}>
                                { image && <Image 
                                    src={image} 
                                    alt={title}
                                    layout={'fill'}
                                    objectFit={'cover'}
                                    /> }
                            </a>
                        </li>
                    }
                })
            }
            </ul>
        </div>
        <NavWrapper>
            <li
                className={`prev ${previousEnabled ? 'enabled' : ''}`}
                onClick={() => handleMoveSlider('prev')}
                >
                    prev
            </li>

            <li 
                className={`next ${nextEnabled ? 'enabled' : ''}`}
                onClick={() => handleMoveSlider('next')}
                >
                    next
            </li>
        </NavWrapper>
    </SliderWrapper>

}

export default Slider