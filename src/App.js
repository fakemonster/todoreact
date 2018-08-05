import React, {Component} from 'react';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div>
      <AddTodo />
    </div>);
  }
}

export default App;