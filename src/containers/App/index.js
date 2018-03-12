import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Categories from '../../components/categories';

import { fetchInitialCategories } from './actions';
import { fetchInitialPosts } from '../ListView/actions';

import ListView from '../ListView/index';
import Modal from '../Modal/index';
import NoMatch from '../../components/noMatch';
import DetailView from '../DetailView/index';
// @TODO: Move
const muiTheme = getMuiTheme({
  palette: {
    textColor: '#800000',
    primary1Color: '#117743',
  },
  appBar: {
    height: 100,
  },
});
// @TODO: styled components classnames
class App extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // console.log('ownProps', this.props.match.params.category);
    if (!this.props.categoryNames.length > 0) {
      this.props.fetchInitialCategories();
      this.props.fetchInitialPosts();
    }
  }

  render() {
    const { categoryNames, location, modalIsOpen } = this.props;

    return (
      <Wrapper>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Container>
            { location.pathname !== '/404' && <Modal modalIsOpen={modalIsOpen} />}
            { categoryNames.length > 0 && location.pathname !== '/404' ?
              <Categories className="categories" categories={categoryNames} /> : null
            }
            <Switch>
              <Route exact path="/" component={ListView} />
              <Route exact path="/404" component={NoMatch} />
              <Route exact path="/:category" component={ListView} />
              <Route exact path="/:category/:post_id" component={DetailView} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </MuiThemeProvider>
      </Wrapper>
    );
  }
}

App.propTypes = {
  categoryNames: PropTypes.array,
  fetchInitialCategories: PropTypes.func.isRequired,
  fetchInitialPosts: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  currentDetail: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

// (state, props)
function mapStateToProps(state) {
  return {
    // categoryNames: state.appReducer.categories.map((item) => item.name),
    categoryNames: state.app.categories,
    modalIsOpen: state.modal.modalIsOpen,
    id: state.detail.id,
    currentDetail: state.detail.currentDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInitialCategories: () => dispatch(fetchInitialCategories()),
    fetchInitialPosts: () => dispatch(fetchInitialPosts()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

