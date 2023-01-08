import '../styles/globals.css'
import '../styles/HomeScreen.css'
import '../styles/Navbar.css'
import '../styles/Banner.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
