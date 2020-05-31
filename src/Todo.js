import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
  static defaultProps = {
    color: '#698474',
  };

  constructor(props) {
    super(props);

    this.state = {
      editedTodo: this.props.task,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { id, task, color, isDone, isEditing } = this.props;
    const { deleteTodo, editTodo, saveTodo, toggleCrossOut } = this.props;
    const { editedTodo } = this.state;

    return !isEditing ? (
      <div className='Todo' data-test='component-todo'>
        <p
          className='Todo-task'
          style={{ color, textDecoration: isDone && 'line-through' }}
          onClick={toggleCrossOut}
        >
          {task}
        </p>
        <i className='fas fa-trash Todo-icon' onClick={deleteTodo}></i>
        <i className='fas fa-pen Todo-icon' onClick={editTodo}></i>
      </div>
    ) : (
      <form
        className='Todo'
        onSubmit={(e) => {
          e.preventDefault();
          saveTodo(id, editedTodo);
        }}
      >
        <input
          className='Todo-edit'
          type='text'
          name='editedTodo'
          value={editedTodo}
          onChange={this.handleChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default Todo;
