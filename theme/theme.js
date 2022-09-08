// Colors

const primitiveColors = {
    black: '#000000',
    white: '#ffffff',
    gray: '#5c5c5c',
    darkGray: '#0C0C0C',
    lightGray: '#E0E0E0',
    red: '#d71920'
}

const themeColors = {
    primary: primitiveColors.red,
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

// Theme

const theme = {
    colors: { ...primitiveColors, ...themeColors },
    typography: { ...themeTypography },
    spacing: { ...themeSpacing }
}

export default theme;