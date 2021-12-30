import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const { persist, store } = storeConfig()
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <Header />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </div>
  )
}
export default MyApp
