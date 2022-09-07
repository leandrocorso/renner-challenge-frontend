import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`${({theme: {colors, typography}}) => `

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

`}`

export default GlobalStyle