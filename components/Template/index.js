import Head from "./Head"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import styled from "styled-components"

const StyledTemplate = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-areas:
        "header"
        "main"
        "footer";
    grid-template-rows: 80px auto 50px;
`

const Template = ({title, children}) =>
    <StyledTemplate>
        <Head title={title}/>
        <Header/>
        <Main>{children}</Main>
        <Footer/>
    </StyledTemplate>

export default Template