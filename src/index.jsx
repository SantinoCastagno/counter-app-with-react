import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './components/CounterApp';

const root = document.querySelector('#root');
ReactDOM.render(<CounterApp value={222}/>, root);


