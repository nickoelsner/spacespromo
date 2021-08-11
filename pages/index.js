import { useState, useEffect } from 'react'
import Home from './Home'

export default function Index() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  } else {
    return <Home />
  }
}
