import React from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Todo task='Learn React' color='blue' />
      <Todo task='Practice data structure and algorithms' />
    </div>
  );
}

export default App;
