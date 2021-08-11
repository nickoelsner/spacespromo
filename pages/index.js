import { useState, useEffect } from 'react'
import MainPage from './MainPage'
import Head from 'next/head'

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  } else {
    return (
      <div>
        <Head>
          <title>SpacesPromo</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/fonts/Montserrat-Regular.ttf" as="font" crossOrigin="" />
          <script
            defer
            data-domain="spacespromo.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <MainPage />
      </div>
    )
  }
}
