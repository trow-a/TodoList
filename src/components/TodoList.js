import React from "react";
import TodoEntry from "./TodoEntry";
import Todo from "./Todo";



export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateTodoToShow = (string) => {
    this.setState({
      todoToShow: string,
    });
  };
  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoEntry onSubmit={this.addTodo} />
        <div className="main">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </div>
        <div className="footer">
          <div className="todo-count">
            {this.state.todos.filter((todo) => !todo.complete).length} Items
            Left
          </div>

          <div className="filters">
            <button onClick={() => this.updateTodoToShow("all")}>All</button>
            <button onClick={() => this.updateTodoToShow("active")}>
              Active
            </button>
            <button onClick={() => this.updateTodoToShow("complete")}>
              complete
            </button>
          </div>
          {this.state.todos.filter((todo) => todo.complete).length ? (
            <div>
              <button
                className="clear-completed"
                onClick={this.removeAllTodosThatAreComplete}
              >
                clrear completed
              </button>
            </div>
          ) : null}
        </div>
        
      
        
      </div>
    );
  }
}
