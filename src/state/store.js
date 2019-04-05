import {  createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const composeEnhancers = (typeof window !== `undefined`) ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ) : compose;

export default function configureStore() {
  return createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
 }