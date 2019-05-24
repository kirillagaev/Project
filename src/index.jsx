import React from "react";
import ReactDOM from "react-dom";
import Form from "./component/form";
import store from './store/index';
import {Provider} from 'react-redux';

import "../stylesheets/styles";


window.React = React;
window.store = store;

ReactDOM.render(<Provider store={store}><Form /></Provider>, document.getElementById("root"));