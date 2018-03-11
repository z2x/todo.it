import React, { Component } from 'react';
import logo from './logo.svg';
import 'normalize.css';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import UserDialog from './UserDialog';
import { getCurrentUser } from './leanCloud';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getCurrentUser() || {},
      newTodo: '',
      todoList: []
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
            <img src={logo} alt=""/>
          </div>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} onChange={this.changeTitle.bind(this)} onSubmit={this.addTodo.bind(this)} />
            <ol>{todos}</ol>
            {this.state.user.id ?
        null :
        <UserDialog
        onSignUp={this.onSignUpOrSignIn.bind(this)}
        onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
          </div>
        </div>
      </div>
    );
  }

  onSignUpOrSignIn(user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = user;
    this.setState(stateCopy);
  }
  componentDidUpdate() {}
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

export default App;

let id = 0;

function idMaker() {
  id += 1;
  return id;
}
