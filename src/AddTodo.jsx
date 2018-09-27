import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    
    // Question: what kind of state do we need here?
    this.state = {
      nextTodo: '',
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Question: how do we handle input text changes?
    const input = event.target; // same as document.getElementById('new-todo')
    this.setState({ nextTodo: input.value })
  }

  handleSubmit(event) {
    // Question: what function (passed from props) do we need to call?
    event.preventDefault();
    const {nextTodo} = this.state;
    this.props.addTodo(nextTodo);
    this.setState({nextTodo: ''});
    // const input = document.getElementById('new-todo');
    // console.log(input.value);
    // input.value = '';
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="new-todo" value={this.state.nextTodo} type="text" onChange={this.handleChange} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTodo;
