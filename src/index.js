import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

// const windowLocation = window.location.origin;
// let base = '/';
// if on localhost during development base = slash
// if (windowLocation.indexOf("localhost") > -1) {
     // base = '/';
// }

ReactDOM.render(
     // development
     // <BrowserRouter basename='/'>
     //  deployed 
     <BrowserRouter basename='/'>
          <App />
     </BrowserRouter>,
     document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();