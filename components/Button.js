import styled from 'styled-components'

const Button = styled.button`${({theme: { spacing, components: { colorButtons } } }) => `
    min-width: 120px;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s;

    padding: calc(${spacing.defaultPadding} / 2) ${spacing.defaultPadding};
    background-color: ${colorButtons.default.bgColor};
    color: ${colorButtons.default.textColor};

    &:hover {
        background-color: ${colorButtons.default.hover.bgColor};
        color: ${colorButtons.default.hover.textColor};
    }
`}`

export default Button