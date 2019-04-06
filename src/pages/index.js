import React from "react";
import HomePage from "./HomePage"
import { Provider } from 'react-redux';
import {store} from "../state/store";
class IndexPage extends React.Component {
  render() {
    console.log(store);
      return (
        <div>
          <Provider store={store}>
          <HomePage />
          </Provider>
        </div>
      );
  }
}
export default IndexPage;
