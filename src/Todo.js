import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
  static defaultProps = {
    color: '#698474',
  };
  render() {
    const { task, color, deleteTodo } = this.props;
    return (
      <div className='Todo' data-test='component-todo'>
        <p className='Todo-task' style={{ color }}>
          {task}
        </p>
        <i className='fas fa-trash Todo-icon' onClick={deleteTodo}></i>
        <i className='fas fa-pen Todo-icon'></i>
      </div>
    );
  }
}

export default Todo;
