//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './image.svg';
import './index.css'

function Index() {
  return (
    <React.StrictMode>
      <div className='centered-content'>
        <img width={300} src={logo} className="App-logo" alt="logo" />
        <h1>React Hello World!</h1>
      </div>
    </React.StrictMode>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Index />
  );
});

export default Index;
