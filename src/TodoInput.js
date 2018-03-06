import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return <input type="text" defaultValue={this.props.content}
      onKeyPress={this.submit} />;
  }

  submit(e) {
    if (e.key === 'Enter') {
      console.log('press Enter');
    }
  }
}

export default TodoInput;
