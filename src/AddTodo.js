import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {val: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({val: event.target.value})
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    // notify App that submission was made.
    this.props.addTodo(this.state.val);
    console.log(this.state.val);
    
    // reset text input back to empty
    this.setState({val: ''});
  }
  
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.val} onChange={this.handleChange} />
      <input type="submit" value="Add" />
    </form>);
  }
}

export default AddTodo;