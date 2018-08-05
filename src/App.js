import React, {Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: [] }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(value) {
    const list = this.state.list;
    // const { list } = this.state;
    if (value) {
      list.push(value);
      this.setState({ list: list })
    }
  }
  
  deleteTodo(id) {
    const list = this.state.list;
    const results = [...list.slice(0, id), ...list.slice(id + 1)];
    this.setState({list: results});
  }
  
  render() {
    return (<div>
      <AddTodo addTodo={this.addTodo} />
      <TodoList list={this.state.list} deleteTodo={this.deleteTodo} />
    </div>);
  }
}

export default App;