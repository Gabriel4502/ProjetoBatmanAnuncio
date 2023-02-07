import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/userContext';
import { NovoStore } from './contexts/novoContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
   
  </React.StrictMode>
);

