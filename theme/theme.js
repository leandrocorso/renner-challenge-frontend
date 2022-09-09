// Colors

const primitiveColors = {
    black: '#000000',
    black50: 'rgba(0,0,0,0.5)',
    white: '#ffffff',
    gray: '#5c5c5c',
    grayDark: '#0C0C0C',
    grayLight: '#E0E0E0',
    red: '#d71920',
    redDark: '#6b0c10'
}

const themeColors = {
    primary: primitiveColors.red,
    primaryDark: primitiveColors.redDark,
    textColor: primitiveColors.black,
    bgColor: primitiveColors.white,
}

// Typography

const themeTypography = {
    defaultFont: 'Roboto, sans-serif',
    defaultFontSize: '16px'
}

// Spacing

const themeSpacing = {
    maxWidth: '440px',
    defaultPadding: '16px',
    defaultMargin: '16px'
}

// Components

const components = {

    colorButtons: {

        default: {
            textColor: primitiveColors.white,
            bgColor: primitiveColors.gray,
            
            hover: {
                textColor: primitiveColors.white,
                bgColor: primitiveColors.grayDark,
            }
        },
        
        primary: {
            textColor: primitiveColors.white,
            bgColor: themeColors.primary,

            hover: {
                textColor: primitiveColors.white,
                bgColor: themeColors.primaryDark,
            }
        },
    }
}

// Theme

const theme = {
    colors: { ...primitiveColors, ...themeColors },
    typography: { ...themeTypography },
    spacing: { ...themeSpacing },
    components: { ...components }
}

export default theme;