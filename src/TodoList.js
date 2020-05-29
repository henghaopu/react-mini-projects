import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo(todo) {
    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='TodoList'>
        <h1>TODO</h1>
        <TodoForm addNewTodo={this.addNewTodo} />
        {todos.map(({ task, id }) => (
          <Todo key={id} task={task} />
        ))}
      </div>
    );
  }
}

export default TodoList;
