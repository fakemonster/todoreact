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
    const { list } = this.state;
    if (value) {
      this.setState({
        list: [...list, value],
      });
    }
  }

  deleteTodo(id) {
    const { list } = this.state;
    const results = [...list.slice(0, id), ...list.slice(id + 1)];
    this.setState({ list: results });
  }

  render() {
    const { list } = this.state;
    return (
      <Fragment>
        <AddTodo addTodo={this.addTodo} />
        <TodoList list={list} deleteTodo={this.deleteTodo} />
      </Fragment>
    );
  }
}

export default App;
