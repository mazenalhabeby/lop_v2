import LayoutWrapper from '@/layouts/LayoutWrapper'
import {ThemeProvider} from 'next-themes'
import App from 'next/app'
import '../styles/globals.scss'

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return {...appProps}
}

export default MyApp
