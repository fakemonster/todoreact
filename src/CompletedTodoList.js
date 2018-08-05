import React from 'react';

const  CompletedTodoList = props => {
  const completedTodos = props.completedList.map((todo, index) => (
  <li key={`todo${index}`}>{todo.todoText}</li>
))
  
  return (
    <div>
      <h3>Completed Todos</h3>
      <ul>
        {completedTodos}
      </ul>
    </div>
  );
}

export default CompletedTodoList;