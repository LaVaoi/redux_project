import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { reducerAction } from './actions/reducerAction';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducerAction)
root.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
);


