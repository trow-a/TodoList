import React from "react";

export default (props) => (
  <div className="todo-list">
    <span
      className="view"
      style={{
        color: props.todo.complete ? "#cdcdcd" : "",
        textDecoration: props.todo.complete ? "line-through" : "",marginRight:"200px"
      }}
    >
      {props.todo.text}
    </span>

    <span
      className="destroy"
      style={{ cursor: "pointer" }}
      onClick={props.onDelete}
    >
      X
    </span>
    <input
      onClick={props.toggleComplete}
      type="checkbox"
      className="toggle"
      value="on"
      checked={props.todo.complete}
      style={{ cursor: "pointer" }}
    ></input>
  </div>
);
