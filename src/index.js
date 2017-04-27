import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatEmitter from './chatEmitter';
import './index.css';

const chat = new ChatEmitter();

ReactDOM.render(
  <App chat={chat}/>,
  document.getElementById('root')
);
