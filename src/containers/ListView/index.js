/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from '../../components/post/index';
import HeaderTop from '../../components/headerTop/index';
import { deletePost, getPostToBeEditedData, updatePostScore } from './actions';
import { toggleModal, setModalToShow } from '../Modal/actions';
import { setSortMethod } from '../App/actions';
import utils from '../../utilities';
import { setDetailId } from '../DetailView/actions';

// @TODO: styled components classnames
class ListView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
  }

  handleSortChange(event) {
    event.preventDefault();
    this.props.setSortMethod(event.target.value);
  }

  render() {
    return (
      <Wrapper className="List-View">
        <HeaderTop
          toggleModal={this.props.toggleModal}
          modalToShow={this.props.modalToShow}
          currentCategory={this.props.currentCategory}
        />
        <label htmlFor="sort"> Sort By: </label>
        <select value={this.props.sortMethod} onChange={this.handleSortChange}>
          <option value="timestamp"> Date</option>
          <option value="voteScore"> Score</option>
        </select>

        <hr />
        <Content>
          {this.props.posts.length > 0 && this.props.posts.map((post) => (
            <Post
              setDetailId={this.props.setDetailId}
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
          ))}
        </Content>
      </Wrapper>
    );
  }
}

ListView.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  posts: PropTypes.array,
  updatePostScore: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalToShow: PropTypes.func.isRequired,
  sortMethod: PropTypes.string.isRequired,
  setSortMethod: PropTypes.func.isRequired,
  getPostToBeEditedData: PropTypes.func.isRequired,
  setDetailId: PropTypes.func.isRequired,
};
// (state, props)


function mapStateToProps(state) {
  const onlyNonDeletedPosts = state.posts.posts.filter((post) => post.deleted === false);
  const sortedPosts = onlyNonDeletedPosts.sort(utils.dynamicSort(state.app.sortMethod)).reverse();
  return {
    currentCategory: state.app.currentCategory,
    posts: sortedPosts,
    sortMethod: state.app.sortMethod,
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
    setDetailId: (payload) => dispatch(setDetailId(payload)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ListView);


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
  padding: 0 0 100px 0;
`;
