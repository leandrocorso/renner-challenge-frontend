import styled from "styled-components";
import Wrapper from "../Wrapper";

const StyledFooter = styled.footer`${({ theme: { colors, spacing } }) => `
    display: flex;
    align-items: center;
    grid-area: footer;
    background-color: ${colors.lightGray};
    padding-left: ${spacing.defaultPadding};
    padding-right: ${spacing.defaultPadding};
    font-size: 80%;
`}`

const Footer = () => 
    <StyledFooter>
        <Wrapper>
            Developed by <a href="mailto:contato@leandrocorso.com.br">Leandro Corso</a>
        </Wrapper>
    </StyledFooter>;

export default Footer;