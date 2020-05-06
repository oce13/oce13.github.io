import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import Pulse from './components/Pulse';
import store from "./reducers/store";
import Main from "./components/Main";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 5300));
  }

  render() {

    const { loading } = this.state;

    if (loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <Pulse />
      );
    }

    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
