import React from "react";
import HomePage from "./HomePage"
import Process from "./Process"
import { Provider } from 'react-redux';
import { store } from "../state/store";
import { Router } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = (props) => (
  <Provider store={store}>
    <Router>
      <HomePage />
      <Process path="Process/:processID"/>
    </Router>

  </Provider>
);
export default IndexPage;
