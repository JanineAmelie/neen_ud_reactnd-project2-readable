/* eslint-disable import/no-named-default */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { RaisedButton } from 'material-ui';
import { default as CommentIcon } from 'material-ui/svg-icons/communication/comment';
import { Redirect } from 'react-router-dom';
import Post from '../../components/post';
// import Comment from '../../components/comment';
import Loader from '../../components/loader/index';
import {
  fetchSinglePostDetail,
  resetDetailState,
  setCurrentDetailDeleted,
  setDetailId,
  fetchPostsComments,
} from './actions';
import { setModalToShow, toggleModal } from '../Modal/actions';
import { deletePost, getPostToBeEditedData, updatePostScore } from '../ListView/actions';
import { setSortMethod } from '../App/actions';


const btnStyle = {
  maxWidth: '125px',
};
class DetailView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.resetDetailState(); // reset state first.
    const theId = this.props.location.pathname.replace(/\/.+\//, '');
    if (this.props.loadingDetail && this.props.detailIsDeleted === '') {
      this.props.setDetailId(theId);
      this.props.fetchSinglePostDetail(theId);
    }
  }
  componentWillUnmount() {
    // this.props.resetDetailState(); // Why doesn't this work :-( moved to didMount.
  }

  handleButtonClick() {
    this.props.modalToShow('submitCommentModal');
    this.props.toggleModal();
  }

  handleDelete(id) {
    this.props.deletePost(id);
    this.props.resetDetailState();
    this.props.setCurrentDetailDeleted();
  }
  render() {
    const {
      detailIsDeleted,
      loadingDetail,
      getPostToBeEditedData,
      modalToShow,
      toggleModal,
      updatePostScore,
      detailId,
      posts,
    } = this.props;

    if (detailIsDeleted) { // if deleted redirect,
      return <Redirect to="/404" />;
    }

    if (!loadingDetail && detailIsDeleted !== '') { // if finished loading
      if (posts.length > 0) {
        const currentDetail = this.props.posts.find((post) => post.id === detailId);
        return (
          <Wrapper className="Detail-View-wrapper">
            <Content>
              <h1>Viewing Post Detail</h1>
              <Post
                getPostToBeEditedData={getPostToBeEditedData}
                modalToShow={modalToShow}
                toggleModal={toggleModal}
                deletePostHandler={(id) => this.handleDelete(id)}
                voteHandler={updatePostScore}
                key={currentDetail.id}
                postId={currentDetail.id}
                title={currentDetail.title}
                timestamp={currentDetail.timestamp}
                author={currentDetail.author}
                category={currentDetail.category}
                commentCount={currentDetail.commentCount}
                voteScore={currentDetail.voteScore}
              />
              <PostContent>
                {currentDetail.body}
              </PostContent>
              <SubmitCommentWrapper>
                <h2>Submit Comment</h2>
                <div>
                  <RaisedButton
                    label="Submit"
                    labelPosition="before"
                    primary
                    icon={<CommentIcon />}
                    onClick={() => this.handleButtonClick()}
                    style={btnStyle}
                  />
                </div>
              </SubmitCommentWrapper>
              <CommentsWrapper>
                <h2> {currentDetail.commentCount} Comment(s):</h2>
                {/* <Comment /> */}
                {/* <Comment /> */}
                {/* <Comment /> */}
                {/* <Comment /> */}
              </CommentsWrapper>
            </Content>
          </Wrapper>
        );
      }
    }
    return <Loader />;
  }
}

DetailView.propTypes = {
  loadingDetail: PropTypes.bool.isRequired,
  // loadingComments: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  fetchSinglePostDetail: PropTypes.func.isRequired,
  resetDetailState: PropTypes.func.isRequired,
  modalToShow: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  getPostToBeEditedData: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePostScore: PropTypes.func.isRequired,
  setCurrentDetailDeleted: PropTypes.func.isRequired,
  setDetailId: PropTypes.func.isRequired,
  posts: PropTypes.array,
  detailIsDeleted: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  detailId: PropTypes.string.isRequired,
  fetchPostsComments: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    detailIsDeleted: state.detail.detailIsDeleted,
    loadingDetail: state.detail.loadingDetail,
    loadingComments: state.detail.loadingComments,
    posts: state.posts.posts,
    detailId: state.detail.detailId,
    loadingPosts: state.posts.loadingPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: () => dispatch(toggleModal()),
    modalToShow: (payload) => dispatch(setModalToShow(payload)),
    fetchSinglePostDetail: (id) => dispatch(fetchSinglePostDetail(id)),
    resetDetailState: () => dispatch(resetDetailState()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePostScore: (postId, upOrDown) => dispatch(updatePostScore(postId, upOrDown)),
    setSortMethod: (payload) => dispatch(setSortMethod(payload)),
    getPostToBeEditedData: (payload) => dispatch(getPostToBeEditedData(payload)),
    setDetailId: (payload) => dispatch(setDetailId(payload)),
    setCurrentDetailDeleted: () => dispatch(setCurrentDetailDeleted()),
    fetchPostsComments: (id) => dispatch(fetchPostsComments(id)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailView));

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
  margin: 0 auto;
  width: 95%;
  max-width: 1024px;
`;

const PostContent = styled.div`
    border: 1px solid #D9BFB7;
    overflow-wrap: break-word;
    padding: 40px 16px 40px;
    background-color: aliceblue;
    width: 100%;
    margin: 0 auto;
    clear: both;
    display: block;
    order: 1;
`;

const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  order: 3;
  align-content: flex-start;
  align-items: flex-start;
`;

const SubmitCommentWrapper = styled.div`
  width: 100%;
  order: 2;
`;
