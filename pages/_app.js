import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../theme'
import store from '../store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }) =>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Component {...pageProps} />
        </ThemeProvider>
    </Provider>

export default MyApp
