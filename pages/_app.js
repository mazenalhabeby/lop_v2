import LayoutWrapper from '@/layouts/LayoutWrapper'
import {Web3Provider} from '@ethersproject/providers'
import {Web3ReactProvider} from '@web3-react/core'
import {AnimatePresence} from 'framer-motion'
import {ThemeProvider} from 'next-themes'
import App from 'next/app'
import '../styles/globals.scss'

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}
function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Web3ReactProvider getLibrary={getLibrary}>
        <AnimatePresence exitBeforeEnter>
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </AnimatePresence>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp
