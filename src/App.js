import React from 'react';
import TodoList from "./components/TodoList"

import './App.css';

class App extends React.Component {
  state={
    count:0
  }
  increment = () =>{
    this.setState({
      count:this.state.count+1
    })
  }
  decrement = () =>{
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    return (
      <div id="todoapp" className="App todoapp">
        <TodoList/>
      </div>
    );
  }
  
}

export default App;
