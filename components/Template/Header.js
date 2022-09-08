import Image from 'next/image'
import styled from 'styled-components'
import Wrapper from '../Wrapper'

const StyledHeader = styled.header`${({ theme: { colors, spacing } }) => `
    grid-area: header;
    display: flex;
    align-items: center;
    background-color: ${colors.darkGray};
    padding-left: ${spacing.defaultPadding};
    padding-right: ${spacing.defaultPadding}
`}`

const Header = () => 
    <StyledHeader>
        <Wrapper>
            <Image 
                src="/images/renner-challenge-logo.png" 
                alt="Renner Challenge"
                width={290}
                height={35}
                />    
        </Wrapper>
    </StyledHeader>

export default Header;