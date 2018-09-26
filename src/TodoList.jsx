import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list, deleteTodo } = this.props;
    return (
      <div>
        {list.map((todo, i) => (
          <div key={`todo${i}`}>
            {todo}
            <button type="button" onClick={() => deleteTodo(i)}>del</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
