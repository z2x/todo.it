import React, { Component } from 'react';
import './UserDialog.css';

class UserDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'signUp'
    };
  }
  switch(e) {
    this.setState({
      selected: e.target.value
    });
  }

  render() {
    let signUpForm = (
    <form action="" className="signUp">
        <div className="row">
          <label htmlFor="">user name</label>
          <input type="text"/>
        </div>
        <div className="row">
          <label htmlFor="">password</label>
          <input type="password"/>
        </div>
        <div className="row actions">
          <button type="submit">sign up</button>
        </div>
      </form>
    );

    let signInForm = (
    <form action="" className="signUp">
        <div className="row">
          <label htmlFor="">user name</label>
          <input type="text"/>
        </div>
        <div className="row">
          <label htmlFor="">password</label>
          <input type="password"/>
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
            <label><input type="radio" value="signIn" checked={this.state.selected === 'signIn'}/>sign in</label>
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

export default UserDialog;
