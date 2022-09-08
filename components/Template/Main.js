import Image from 'next/image'
import styled from 'styled-components'
import Wrapper from '../Wrapper'

const StyledMain = styled.main`${({ theme: { colors, spacing } }) => `
    grid-area: main;
    background-color: ${colors.bgColor};
    padding: ${spacing.defaultPadding};
`}`

const Main = ({children}) => 
    <StyledMain>
        <Wrapper>
            {children}
        </Wrapper>
    </StyledMain>

export default Main;