import React from 'react';


const AddTodo = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.inputText} onChange={props.handleChange} />
      <input type='submit' value='Add' />
    </form>
  </div>
)

export default AddTodo;