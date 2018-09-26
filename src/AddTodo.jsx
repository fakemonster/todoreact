import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const input = document.getElementById('new-todo');
    this.props.addTodo(input.value);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="new-todo" type="text" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTodo;
