import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../components/defaultTemplate'

const MyApp = ({ Component, pageProps }) =>
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    </>

export default MyApp
