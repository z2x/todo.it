import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: 'test',
      todoList: [{
        id: 1,
        title: 'hello world'
      }]
    };
  }

  render() {
    let todos = this.state.todoList.map((item, index) => {
      return <li>{item.title}</li>;
    });

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo} />
        </div>
      </div>
    );
  }
}

export default App;
