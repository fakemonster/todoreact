import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      <h3>My Current Todos</h3>
      {props.list.map((todo, id) => {
        return (
          <div key={`todo${id}`}>
            {todo.todoText} 
            <button onClick={() => props.completeTodo(id)}>Complete</button>
            <button onClick={() => props.modifyTodo(id)}>Modify</button> 
            <button onClick={() => props.deleteTodo(id)}>Delete</button> 
          </div>
        )
      })}
    </div>
  )
}

export default TodoList;