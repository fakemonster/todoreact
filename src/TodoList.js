import React from "react";

const TodoList = props => {
  return (
    <div>
      {props.list.map((todo, id) => {
        return <div key={`todo${id}`}>{todo}</div>;
      })}
    </div>
  );
};

export default TodoList;
