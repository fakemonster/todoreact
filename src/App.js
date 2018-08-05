import React, {Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list: [] }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(value) {
    const list = this.state.list;
    // const { list } = this.state;
    list.push(value);
    this.setState({ list: list })
  }
  
  render() {
    return (<div>
      <AddTodo addTodo={this.addTodo} />
      <TodoList list={this.state.list}/>
    </div>);
  }
}

export default App;