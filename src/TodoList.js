import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: uuidv4(), task: 'Learn React', color: '#168cc1' }],
    };

    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo(todo) {
    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  }

  deleteTodo(id) {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='TodoList'>
        <h1>TODO</h1>
        <TodoForm addNewTodo={this.addNewTodo} />
        {todos.map(({ id, task, color }) => (
          <Todo
            key={id}
            task={task}
            color={color}
            deleteTodo={() => this.deleteTodo(id)}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
