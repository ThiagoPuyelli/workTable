import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './authReducer'
import { env } from '../next.config'

const rootReducer = combineReducers({
  auth: authReducer
})

let configPersist = {
  key: env?.STORE_PASS ? env.STORE_PASS : 'eltato',
  storage
}


const compostEnhacers = composeWithDevTools(
  applyMiddleware(thunk)
)

const persistState = persistReducer(configPersist, rootReducer)

export default function generateStore() {
  const store = createStore(persistState, compostEnhacers)
  const persist = persistStore(store)
  return { store, persist }
}