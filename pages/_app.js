import '../styles/globals.css'
import SEO from '../next-seo.config.js'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
