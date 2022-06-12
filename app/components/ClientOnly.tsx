import { ReactNode, useState, useEffect } from 'react'

export default function ClientOnly({ children }: { children: ReactNode }) {
  debugger;
  let [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted ? <>{children}</> : null
} 
