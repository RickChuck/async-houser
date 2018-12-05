import React, { Component } from 'react';
import routes from './routes';
import Header from './Components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='main-body'>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
