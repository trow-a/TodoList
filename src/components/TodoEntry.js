import React from "react";
import shortid from "shortid";

export default class TodoEntry extends React.Component {
  state = {
    text: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <form autocomplete="off" onSubmit={this.handleSubmit} className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder=" what needs to be done ?"
        />
      </form>
    );
  }
}
