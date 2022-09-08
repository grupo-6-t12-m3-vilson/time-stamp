import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ToastContainer } from 'react-toastify';
import Provider from './provider';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
