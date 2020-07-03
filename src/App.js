import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {
  state = {
    username: 'Jean'
  }

  changeEventHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Assignment1!</h2>
        </div>
        <p className="App-intro">
          <UserInput username={this.state.username} changed={this.changeEventHandler}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username="Nome Fixo"/>
        </p>
      </div>
    );
  }
}

export default App;
