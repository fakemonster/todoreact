import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import CompletedTodoList from './CompletedTodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
      completedList: [],
      inputText: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.modifyTodo = this.modifyTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
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
    const todo = {
      todoText: value,
      completed: false
    }
    list.push(todo);
    this.setState({ 
      list: list, 
      inputText: ''
    });
  }

  modifyTodo(index) {
    const list = this.state.list;
    const todoText = list[index].todoText;
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

  completeTodo(index) {
    const list = this.state.list;
    const completedList = this.state.completedList;
    const todo = {...list[index]};
    list.splice(index, 1);
    completedList.push(todo);
    this.setState({
      list,
      completedList,
    });
  }

  render() {
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
          completeTodo={this.completeTodo}
          />
        <CompletedTodoList  completedList={this.state.completedList} />
      </div>
    );
  }
}

export default App;
