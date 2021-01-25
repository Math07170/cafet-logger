import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Login from './Login';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

localStorage.setItem('logged', 'false');
if(localStorage.getItem('logged') === 'false' || localStorage.getItem('logged') === null){
  ReactDOM.render(
    <div className="content">
      <Login /></div>,
    document.getElementById('root')
    );
}else{
  ReactDOM.render(<div className="content"><Main /></div>,
    document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
