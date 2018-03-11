import React, { Component } from 'react';
import './UserDialog.css';
export default class UserDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'signUp',
      formData: {
        username: '',
        password: '',
      }
    };
  }
  switch(e) {
    this.setState({
      selected: e.target.value
    });
  }
  signUp(e) {}
  signIn(e) {}
  changeFormData(key, e) {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.formData[key] = e.target.value;
    this.setState(stateCopy);
  }
  render() {
    let signUpForm = (
    <form className="signUp" onSubmit={this.signUp.bind(this)}>
        <div className="row">
          <label>username</label>
          <input type="text" value={this.state.formData.username}
    onChange={this.changeFormData.bind(this, 'username')}/>
        </div>
        <div className="row">
          <label>password</label>
          <input type="password" value={this.state.formData.password}
    onChange={this.changeFormData.bind(this, 'password')}/>
        </div>
        <div className="row actions">
          <button type="submit">sign up</button>
        </div>
      </form>
    );
    let signInForm = (
    <form className="signIn" onSubmit={this.signIn.bind(this)}>
        <div className="row">
          <label>username</label>
          <input type="text" value={this.state.formData.username}
    onChange={this.changeFormData.bind(this, 'username')}/>
        </div>
        <div className="row">
          <label>password</label>
          <input type="password" value={this.state.formData.password}
    onChange={this.changeFormData.bind(this, 'password')}/>
        </div>
        <div className="row actions">
          <button type="submit">sign in</button>
        </div>
      </form>
    );
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav onChange={this.switch.bind(this)}>
            <label><input type="radio" value="signUp" checked={this.state.selected === 'signUp'}/> sign up</label>
            <label><input type="radio" value="signIn" checked={this.state.selected === 'signIn'}/> sign in</label>
          </nav>
          <div className="panes">
            {this.state.selected === 'signUp' ? signUpForm : null}
            {this.state.selected === 'signIn' ? signInForm : null}
          </div>
        </div>
      </div>
    );
  }
}
