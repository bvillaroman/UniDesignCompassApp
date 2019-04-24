import React from "react";
import HomePage from "./HomePage"
import { Provider } from 'react-redux';
import { store } from "../state/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = (props) => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);
export default IndexPage;
