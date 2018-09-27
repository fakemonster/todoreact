import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    
    // Question: what kind of state do we need here?
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Question: how do we handle input text changes?
    
  }

  handleSubmit(event) {
    // Question: what function (passed from props) do we need to call?
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="new-todo" type="text" onChange={this.handleChange} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTodo;
