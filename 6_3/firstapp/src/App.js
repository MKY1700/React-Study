import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent.js';

function App() {
  return <MyComponent number={3}>리액트</MyComponent>;
}

// class App extends Component{ 
//   render() {
//     const name = 'react';
//     return <div className='react'>{name}</div>;
//   }
// }
export default App;