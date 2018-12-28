import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App {this.props.user}
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
