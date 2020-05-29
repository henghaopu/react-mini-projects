import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
  static defaultProps = {
    color: '#698474',
  };

  crossOut() {}

  render() {
    const { task, color, isDone, deleteTodo, toggleCrossOut } = this.props;
    return (
      <div className='Todo' data-test='component-todo'>
        <p
          className='Todo-task'
          style={{ color, textDecoration: isDone && 'line-through' }}
          onClick={toggleCrossOut}
        >
          {task}
        </p>
        <i className='fas fa-trash Todo-icon' onClick={deleteTodo}></i>
        <i className='fas fa-pen Todo-icon'></i>
      </div>
    );
  }
}

export default Todo;
