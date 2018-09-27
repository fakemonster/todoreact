import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, deleteTodo } = this.props;
    return (
      <div>
        {list.map((todo, idx) => (
          <div key={todo.id}>
            {todo.text}
            <button type="button" onClick={() => deleteTodo(idx, todo.id)}>del</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
