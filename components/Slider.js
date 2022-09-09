import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/productsSlice'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
const NavWrapper = styled.ul`${({theme: { colors, spacing }}) => `
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
        padding: calc(${spacing.defaultPadding} / 2);
        cursor: pointer;
        transition: all .3s;

        &:hover {
            background-color: ${colors.black50};
            color: ${colors.white};
        }

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

`}`

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
                            { image && <Link href={`/products/${id}`}>
                                <a className='image-wrapper' ><Image 
                                    src={image} 
                                    alt={title}
                                    layout={'fill'}
                                    objectFit={'cover'}
                                /></a>
                            </Link> }
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
                title="Anterior"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
            </li>

            <li
                className={`next ${nextEnabled ? 'enabled' : ''}`}
                onClick={() => handleMoveSlider('next')}
                title="Próximo"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
            </li>

            
        </NavWrapper>
    </SliderWrapper>

}

export default Slider