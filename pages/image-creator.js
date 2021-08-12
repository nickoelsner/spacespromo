import { useState, useEffect } from 'react'
import Head from 'next/head'
import ImageCreator from '../components/ImageCreator'

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
        <ImageCreator />
      </div>
    )
  }
}
