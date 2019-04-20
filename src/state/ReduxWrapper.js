import React from 'react';
import { Provider } from 'react-redux';
import createStore from "./store";
import { PersistGate } from 'redux-persist/integration/react'

export default ({ element }) => (
  <Provider store={createStore().store}>
    <PersistGate loading={null} persistor={createStore().persistor}>
      {element}
    </PersistGate>
  </Provider>
);