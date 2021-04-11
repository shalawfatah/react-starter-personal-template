import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreContext } from './components/StoreContext';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext>
    <App />
    </StoreContext>
  </React.StrictMode>,
  document.getElementById('root')
);
