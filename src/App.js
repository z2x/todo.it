import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: 'test',
      todoList: [{
        id: 1,
        title: 'This is your first thing to do'
      }, {
        id: 2,
        title: 'This is your second thing to do'
      }]
    };
  }

  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li>
          <TodoItem todo={item} />
        </li>
      );
    });

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} />
        </div>
      </div>
    );
  }
}

export default App;
