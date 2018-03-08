import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Categories from '../../components/categories';

import { initialTest } from './actions';
import HeaderTop from '../../components/headerTop/index';
import ListView from '../ListView/index';
import DetailView from '../DetailView/index';

// @TODO: styled components classnames
class App extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('foo:', this.props.testItem);
  }
  handleChange(e) {
    console.log('yay:', e.target.value);
    this.props.testDispatch(e.target.value);
  }
  render() {
    return (
      <Wrapper className="App">
        <Categories />
        <HeaderTop />
         <ListView />
        {/* <DetailView />  */}
      </Wrapper>
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
const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: block;
  position: relative;
  margin: 0 auto;
`;

