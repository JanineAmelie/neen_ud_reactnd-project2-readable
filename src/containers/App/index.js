import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Categories from '../../components/categories';

import { fetchInitialCategories } from './actions';
import { fetchInitialPosts } from '../ListView/actions';

import ListView from '../ListView/index';
import DebugBar from '../../components/debugBar/index';
// import DetailView from '../DetailView/index';

// @TODO: styled components classnames
class App extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.categoryNames.length > 0) {
      this.props.fetchInitialCategories();
      this.props.fetchInitialPosts();
    }
  }

  render() {
    return (
      <Wrapper className="App">
        <DebugBar />
        {this.props.categoryNames.length > 0 && <Categories categories={this.props.categoryNames} /> }
        <ListView />
        {/* <DetailView />  */}
      </Wrapper>
    );
  }
}

App.propTypes = {
  categoryNames: PropTypes.array,
  fetchInitialCategories: PropTypes.func.isRequired,
  fetchInitialPosts: PropTypes.func.isRequired,
};

// (state, props)
function mapStateToProps(state) {
  return {
    // categoryNames: state.appReducer.categories.map((item) => item.name),
    categoryNames: state.app.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInitialCategories: () => dispatch(fetchInitialCategories()),
    fetchInitialPosts: () => dispatch(fetchInitialPosts()),
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

