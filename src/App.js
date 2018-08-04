import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
      inputText: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.modifyTodo = this.modifyTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addTodo(this.state.inputText);
    
  }

  addTodo(value) {
    const list = this.state.list;
    list.push(value);
    this.setState({ 
      list: list, 
      inputText: ''
    });
  }

  modifyTodo(index) {
    const list = this.state.list;
    const todoText = list[index];
    list.splice(index, 1);
    this.setState({
      list: list,
      inputText: todoText
    });
  }

  deleteTodo(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
  }

  render() {
    console.log(this.state.list);

    return (
      <div>
        <h1>Super Awesome Todo List</h1>
        <AddTodo 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          inputText={this.state.inputText} 
          />
        <TodoList 
          list={this.state.list} 
          deleteTodo={this.deleteTodo} 
          modifyTodo={this.modifyTodo} 
          />
      </div>
    );
  }
}

export default App;
