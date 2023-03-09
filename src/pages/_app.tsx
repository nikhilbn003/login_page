// import { AuthProvider } from '../context/AuthContextProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Login from './auth/login'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  {/* <AuthProvider>  */}
   <Component {...pageProps} />
  {/* </AuthProvider> */}
  </>
  )

  // return <Component {...pageProps} />
};
