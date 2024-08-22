import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/authContext';
import { ApiProvider } from './context/apicontext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <ApiProvider>
  <AuthProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </AuthProvider></ApiProvider>
);
