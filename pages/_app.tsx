import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import PasswordScreen from './components/PasswordScreen';

function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false)

  const handlePasswordEntered = (password) => {
    if (password === 'lamaishot') {
      setAuthenticated(true)
    }
  }

  if (!authenticated) {
    return <PasswordScreen onPasswordEntered={handlePasswordEntered} />
  }

  return <Component {...pageProps} />
}

export default MyApp