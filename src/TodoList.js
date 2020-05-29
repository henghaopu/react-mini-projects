import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuidv4(),
          task: 'Learn React',
          color: '#168cc1',
          isDone: false,
          isEditing: false,
        },
      ],
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  addNewTodo({ task, id }) {
    this.setState(({ todos }) => ({
      todos: [...todos, { id, task, isDone: false }],
    }));
  }

  deleteTodo(id) {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    }));
  }

  editTodo(id) {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      ),
    }));
  }

  saveTodo(id, editedTodo) {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false, task: editedTodo } : todo
      ),
    }));
  }

  toggleCrossOut(id) {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      ),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='TodoList'>
        <h1>TODO</h1>
        <TodoForm addNewTodo={this.addNewTodo} />
        {todos.map(({ id, task, color, isDone, isEditing }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            color={color}
            isDone={isDone}
            isEditing={isEditing}
            deleteTodo={() => this.deleteTodo(id)}
            editTodo={() => this.editTodo(id)}
            saveTodo={this.saveTodo}
            toggleCrossOut={() => this.toggleCrossOut(id)}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
