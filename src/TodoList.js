import React from "react";

const TodoList = props => {
  return (
    <div>
      {props.list.map((todo, i) => {
        return (<div key={`todo${i}`}>
          {todo}
          <button onClick={() => props.deleteTodo(i)}>del</button>
        </div>);
      })}
    </div>
  );
};

export default TodoList;
