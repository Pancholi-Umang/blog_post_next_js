import '../styles/globals.css'
import Navbar from './navbarcomponent/navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
