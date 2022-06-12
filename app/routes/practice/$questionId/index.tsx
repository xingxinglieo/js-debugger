import Problem from './Problem'
import monacoCSS from '~/styles/monaco.css'

export function links() {
  return [{ rel: 'stylesheet', href: monacoCSS }]
}
export default function Question() {
  return (
    <Problem />
  )
}
