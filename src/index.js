import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dashboard from "./reducers/dashboard.reduser";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as api from "./utils/apiRequest.js";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter } from "react-router-dom";
import "babel-polyfill";
import registerServiceWorker from './registerServiceWorker';
const rootReducer = combineReducers({
    dashboard
  });
  
  let store = createStore(
    rootReducer,
    applyMiddleware(
      thunk.withExtraArgument({
        api
      })
    )
  );

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();