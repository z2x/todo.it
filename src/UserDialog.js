import React, { Component } from 'react';
import './UserDialog.css';

class UserDialog extends Component {
  render() {
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav>
            <input type="radio"/> sign up
            <input type="radio"/> sign in
          </nav>
          <div className="panes">
            <form action="" className="signUp">
              <div className='row'>
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
            <form action="" className="singIn">
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserDialog;
