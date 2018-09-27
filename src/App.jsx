import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: [] };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(value) {
    // Question: how do we add a todo with the given value, and call setState?
    
  }

  deleteTodo(id) {
    // Question: how do we delete a todo with the given id, and call setState?
    
  }

  render() {
    // Question: what props do we need to pass to AddTodo and TodoList?
    return (
      <Fragment>
        <AddTodo />
        <TodoList />
      </Fragment>
    );
  }
}

export default App;
