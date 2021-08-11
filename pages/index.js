import { useState, useEffect } from 'react'
import MainPage from '../components/MainPage'
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
