import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css'; 
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Cela correspond à la div avec l'id "root" dans index.html
);
