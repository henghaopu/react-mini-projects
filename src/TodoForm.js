import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewTodo({ task: this.state.newTodo, id: uuidv4() });
    this.setState({
      newTodo: '',
    });
  }

  render() {
    return (
      <form className='TodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='new-todo'>New Todo</label>
        <input
          type='text'
          id='new-todo'
          name='newTodo'
          placeholder='New Todo'
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
