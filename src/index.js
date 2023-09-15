//index.js
import React  from 'react';
import ReactDOM from 'react-dom/client';
import logo from './image.svg';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div class='centered-content'>
      <img width={300} src={logo} className="App-logo" alt="logo" />
      <h1>React Hello World!</h1>
    </div>
  </React.StrictMode>
);
