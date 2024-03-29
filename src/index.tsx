import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import combinedReducers from './Application/Redux';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let store = createStore(combinedReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
export type RootState = ReturnType<typeof store.getState>
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

