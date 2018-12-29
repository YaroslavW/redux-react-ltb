import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user;
    return (
      <div className="App">
        My App { name } { surname } { age }
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}
export default connect(mapStateToProps)(App);
