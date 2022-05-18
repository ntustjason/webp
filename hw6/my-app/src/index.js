import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import multiButton from './cgu_multiButton';

function App() { 
  return ( 
    <div className="App"> 
 { multiButton(10) }
    </div> 
  ); 
} 
ReactDOM.render( 
  <div> 
    <App /> 
  </div>, 
  document.getElementById('root') 
);
reportWebVitals();