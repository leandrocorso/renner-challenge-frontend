import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`${({theme: {colors, typography, spacing}}) => `

    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
        background-color: ${colors.bgColor};
        color: ${colors.textColor};
        font-family: ${typography.defaultFont};
        font-size: ${typography.defaultFontSize}
    }

    h1 {
        font-size: 180%;
        margin-bottom: calc(${spacing.defaultMargin} * 1.5);
    }
    
    p { 
        margin-bottom: ${spacing.defaultMargin};
        line-height: 1.5;
    }

    ul, ol { 
        margin-left: ${spacing.defaultMargin};
        margin-bottom: ${spacing.defaultMargin};
        font-size: 90%;
        
        li:not(:last-child) {
            margin-bottom: calc(${spacing.defaultMargin} / 2);
        }
    }

    a {
        color: ${colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }

`}`

export default GlobalStyle