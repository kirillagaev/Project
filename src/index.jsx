import React from "react";
import ReactDOM from "react-dom";
import Form from "./component/form";
import store from './store/store';
import {Provider} from 'react-redux';

import "../stylesheets/styles";

ReactDOM.render(
  <Provider store={store} >
      <Form />
  </Provider>,
  document.getElementById("root")
);
