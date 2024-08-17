import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';
import { AuthProvider } from './context/authContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <AuthProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </AuthProvider>
);
