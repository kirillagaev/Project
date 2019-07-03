import React from "react";
import ReactDOM from "react-dom";
import store from './store/store';
import {Provider} from 'react-redux';
import Container from './component/container'

import "../stylesheets/styles";

ReactDOM.render(
  <Provider store={store}>
      <Container />
  </Provider>,
  document.getElementById("root")
);