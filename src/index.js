import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/GlobalContext'; // Import ContextProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>  {/* Wrap your app with ContextProvider */}
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
