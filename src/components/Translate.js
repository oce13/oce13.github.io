import { Component, Fragment } from 'react';
import React from 'react'
import { connect } from 'react-redux';
import data from '../data/Dictionnary';


class Translate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    }

  }

  render() {
    return (
      <Fragment>{data[this.props.selectedLanguage][this.props.id]}</Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Translate);