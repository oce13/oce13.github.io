import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Pulse from './components/Pulse';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 5500));
  }

  render() {

    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <Pulse />
      );
    }

    return (
      <div>
        <NavBar />
        <div className="header">
          <div className="title">Bonjour, je m'appelle <span style={{fontWeight: "bold"}}>Océane</span>.</div>
          <p>Etudiante en software engineering.</p>
        </div>
      </div>
    );
  }
}

export default App;
