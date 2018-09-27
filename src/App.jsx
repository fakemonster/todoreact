import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.lifestyle = 'chillin';
  }

  componentDidMount() {
    fetch('http://localhost:3005/todos')
      .then(res => res.json())
      .then(data => {
        this.setState({ list: data })
      })
      .catch(console.error);
  }
  
  addTodo(value) {
    // Question: how do we add a todo with the given value, and call setState?
    fetch('http://localhost:3005/todos', {
      method: 'POST',
      body: JSON.stringify({
        text: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: this.state.list.concat(data),
        })
      })
      .catch(console.error);
  }

  deleteTodo(idx, id) {
    // Question: how do we delete a todo with the given id, and call setState?
    // fetch('http://localhost:3005/todos/' + id)
    fetch(`http://localhost:3005/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.status === 200) {
          const { list } = this.state;
          this.setState({
            list: [...list.slice(0, idx), ...list.slice(idx + 1)],
          })
        }
      })
      .catch(console.error);

    

  }

  render() {
    // Question: what props do we need to pass to AddTodo and TodoList?
    return (
      <Fragment>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList deleteTodo={this.deleteTodo} list={this.state.list} />
      </Fragment>
    );
  }
}

export default App;
