import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './layout/app';
import './styles/index.css';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
                  <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
