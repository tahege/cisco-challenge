import React, { Component } from 'react';
import logo from './logo.svg';

export class Home extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcom to Mechanic Singe Page App. This is a Interview Project. To see the instructions go to the README.
          </p>
        </header>
      </div>
    );
  }
}
