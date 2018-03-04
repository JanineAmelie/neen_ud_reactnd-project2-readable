import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';
import './App.css';

import { initialTest } from './actions';

class App extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('foo:', this.props.testItem);
  }
  handleClick(e) {
    console.log('yay:', e.target.id);
    this.props.testDispatch(e.target.id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.testItem}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button id="testBtn" onClick={(e) => this.handleClick(e)}> ClickMe to fire an action</button>
      </div>
    );
  }
}

App.propTypes = {
  testItem: PropTypes.string,
  testDispatch: PropTypes.func,
};

// (state, props)
function mapStateToProps(state) {
  return {
    testItem: state.appReducer.testItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testDispatch: (payload) => dispatch(initialTest(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
