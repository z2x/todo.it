import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import * as localStore from './localStore';
import AV from 'leancloud-storage';

let APP_ID = 'WiamNEuR1RvvIikVyFhpAbUB-gzGzoHsz';
let APP_KEY = 'ewLqQgvGfn4Hcjs2xxfGxE4L';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todoList: localStore.load('todoList') || []
    };
  }

  render() {
    let todos = this.state.todoList.filter((item) => !item.deleted).map((item, index) => {
      return (
        <li key={index} >
          <TodoItem todo={item} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="toDoApp">
          <div className="App-logo">
            <img src={logo} />
          </div>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} onChange={this.changeTitle.bind(this)} onSubmit={this.addTodo.bind(this)} />
            <ol>{todos}</ol>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    localStore.save('todoList', this.state.todoList);
  }

  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed';
    this.setState(this.state);
  }

  changeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    });
  }

  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    });
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    });
  }

  delete(event, todo) {
    todo.deleted = true;
    this.setState(this.state);
  }
}

let id = 0;

function idMaker() {
  id += 1;
  return id;
}

export default App;