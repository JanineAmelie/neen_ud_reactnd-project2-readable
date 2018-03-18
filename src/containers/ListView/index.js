/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect, withRouter } from 'react-router-dom';
import Post from '../../components/post/index';
import HeaderTop from '../../components/headerTop/index';
import { deletePost, getPostToBeEditedData, updatePostScore } from './actions';
import { toggleModal, setModalToShow } from '../Modal/actions';
import { setSortMethod } from '../App/actions';
import utils from '../../utilities';
import { resetDetailState } from '../DetailView/actions';
import Loader from '../../components/loader/index';

// @TODO: styled components classnames
class ListView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    this.props.resetDetailState();
  }

  handleSortChange(event) {
    event.preventDefault();
    this.props.setSortMethod(event.target.value);
  }

  isValidCategory(route, categories) {
    if (route === '/') {
      return true;
    }
    const routeWithoutSlash = route.replace('/', '');
    return !!categories.includes(routeWithoutSlash);
  }
  currentCategory(route) {
    if (route === '/') {
      return 'all';
    }
    return route.replace('/', '');
  }

  render() {
    // @TODO loading variable
    // show spinner if content doesn't exist yet.
    if (this.props.categories.length > 0 && !this.props.loadingPosts) {
      // checks if valid category, if not redirect
      if (!this.isValidCategory(this.props.location.pathname, this.props.categories)) {
        return (
          <Redirect
            to={{
              pathname: '/404',
              state: { message: 'category does not exist' }, // how to access this in 404 page.
            }}
          />
        );
      }
      // if valid category, filters posts according to the category route
      let posts = [];
      const theCategory = this.currentCategory(this.props.location.pathname);
      if (theCategory === 'all') {
        posts = this.props.posts; // eslint-disable-line prefer-destructuring
      } else {
        posts = this.props.posts.filter((post) => post.category === theCategory);
      }
      return (
        <Wrapper className="List-View">
          <HeaderTop
            toggleModal={this.props.toggleModal}
            modalToShow={this.props.modalToShow}
            currentCategory={theCategory}
          />
          { posts.length > 0 &&
            <FilterDiv>
              <label htmlFor="sort"> Sort By: </label>
              <select value={this.props.sortMethod} onChange={this.handleSortChange}>
                <option value="timestamp">Date</option>
                <option value="voteScore">Score</option>
              </select>
            </FilterDiv>
          }
          <Content>
            { posts.length > 0 ?
              posts.map((post) => (
                <Post
                  getPostToBeEditedData={this.props.getPostToBeEditedData}
                  modalToShow={this.props.modalToShow}
                  toggleModal={this.props.toggleModal}
                  deletePostHandler={this.props.deletePost}
                  voteHandler={this.props.updatePostScore}
                  key={post.id}
                  postId={post.id}
                  title={post.title}
                  timestamp={post.timestamp}
                  author={post.author}
                  category={post.category}
                  commentCount={post.commentCount}
                  voteScore={post.voteScore}
                />
              ))
              : (
                <NoPostsLabel>
                  { theCategory === 'all' ? 'No posts yet, submit? :-)' : `No posts in category: ${theCategory}`}
                </NoPostsLabel>
              )
            }
          </Content>
        </Wrapper>
      );
    }
    return <Loader />;
  }
}

ListView.propTypes = {
  posts: PropTypes.array,
  updatePostScore: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalToShow: PropTypes.func.isRequired,
  sortMethod: PropTypes.string.isRequired,
  setSortMethod: PropTypes.func.isRequired,
  getPostToBeEditedData: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  loadingPosts: PropTypes.bool.isRequired,
  resetDetailState: PropTypes.func.isRequired,
};
// (state, props)


function mapStateToProps(state) {
  const onlyNonDeletedPosts = state.posts.posts.filter((post) => post.deleted === false);
  const sortedPosts = onlyNonDeletedPosts.sort(utils.dynamicSort(state.app.sortMethod)).reverse();
  return {
    posts: sortedPosts,
    sortMethod: state.app.sortMethod,
    categories: state.app.categories.map((item) => item.name),
    loadingPosts: state.posts.loadingPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePostScore: (postId, upOrDown) => dispatch(updatePostScore(postId, upOrDown)),
    toggleModal: () => dispatch(toggleModal()),
    modalToShow: (payload) => dispatch(setModalToShow(payload)),
    setSortMethod: (payload) => dispatch(setSortMethod(payload)),
    getPostToBeEditedData: (payload) => dispatch(getPostToBeEditedData(payload)),
    resetDetailState: () => dispatch(resetDetailState()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListView));

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: block;
  position: relative;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 32px 32px;
  margin: 0 auto;
  box-shadow: 0 1px 5px rgba(0,0,0,0.16);
  background-color: #fff;
  width: 90%;
  max-width: 1024px;
`;

const NoPostsLabel = styled.span`
  width: 100%;
  text-align: center;
  padding: 2em 0 0;
`;

const FilterDiv = styled.div`
  padding: 8px 32px;
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  box-shadow: 0 1px 5px rgba(0,0,0,0.16);
  background-color: #fff;
`;
