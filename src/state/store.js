import {  createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, RootReducer)

const composeEnhancers = (typeof window !== `undefined`) ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ) : compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store)
export default function configureStore() {
  return {store, persistor};
 }

