/* eslint-disable import/no-named-default,jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { RaisedButton } from 'material-ui';
import { default as CommentIcon } from 'material-ui/svg-icons/communication/comment';
import { Redirect } from 'react-router-dom';
import Post from '../../components/post';
import Comment from '../../components/comment';
import Loader from '../../components/loader/index';
import {
  fetchSinglePostDetail,
  resetDetailState,
  setCurrentDetailDeleted,
  setDetailId,
  deleteComment,
  updateCommentScore,
  setCommentSortMethod,
  getCommentToBeEdited,
} from './actions';
import { setModalToShow, toggleModal } from '../Modal/actions';
import { deletePost, getPostToBeEditedData, updatePostScore } from '../ListView/actions';
import { setSortMethod } from '../App/actions';
import utils from '../../utilities/index';


const btnStyle = {
  margin: '16px 0 0',
};
class DetailView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleCommentSortChange = this.handleCommentSortChange.bind(this);
  }

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

  handleCommentSortChange(event) {
    event.preventDefault();
    this.props.setCommentSortMethod(event.target.value);
  }

  editCommentHandler(id) {
    this.props.getCommentToBeEdited(id);
    this.props.modalToShow('editCommentModal');
    this.props.toggleModal();
  }

  commentWhatToShow(commentLoadingState, comments) {
    if (commentLoadingState) {
      return <Loader />;
    }

    return (
      <div className="clear-it">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            timestamp={comment.timestamp}
            author={comment.author}
            body={comment.body}
            commentId={comment.id}
            commentScore={comment.voteScore}
            voteCommentHandler={(commentId, type) => this.props.updateCommentScore(commentId, type)}
            editCommentHandler={() => this.editCommentHandler(comment.id)}
            deleteCommentHandler={(commentId, parentId) => this.props.deleteComment(commentId, parentId)}
            parentId={comment.parentId}
          />))
        }
      </div>
    );
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
      loadingComments,
      comments,
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
              <TopPart className="clear-it">
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
              </TopPart>
              <SubmitCommentWrapper className="clear-it">
                <RaisedButton
                  label="Submit a comment"
                  labelPosition="before"
                  primary
                  icon={<CommentIcon />}
                  onClick={() => this.handleButtonClick()}
                  style={btnStyle}
                />
              </SubmitCommentWrapper>

              <CommentsInfo className="clear-it">
                <CommentsHeader className="clear-it"> {comments.length} Comment(s) </CommentsHeader>
                <FilterDiv className="clear-it">
                  <label htmlFor="sort"> Sorted By: </label>
                  <select style={{ appearance: 'none' }} value={this.props.commentSortMethod} onChange={this.handleCommentSortChange}>
                    <option value="timestamp">Date</option>
                    <option value="voteScore">Score</option>
                  </select>
                </FilterDiv>
              </CommentsInfo>
              <CommentsWrapper>
                { this.commentWhatToShow(loadingComments, comments)}
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
  comments: PropTypes.array.isRequired,
  loadingComments: PropTypes.bool.isRequired,
  deleteComment: PropTypes.func.isRequired,
  updateCommentScore: PropTypes.func.isRequired,
  commentSortMethod: PropTypes.string.isRequired,
  setCommentSortMethod: PropTypes.func.isRequired,
  getCommentToBeEdited: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const onlyNonDeletedComments = state.detail.comments.filter((comment) => comment.deleted === false);
  const sortedComments = onlyNonDeletedComments.sort(utils.dynamicSort(state.detail.commentSortMethod)).reverse();
  return {
    detailIsDeleted: state.detail.detailIsDeleted,
    loadingDetail: state.detail.loadingDetail,
    loadingComments: state.detail.loadingComments,
    posts: state.posts.posts,
    detailId: state.detail.detailId,
    loadingPosts: state.posts.loadingPosts,
    comments: sortedComments,
    commentSortMethod: state.detail.commentSortMethod,
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
    deleteComment: (commentId, parentId) => dispatch(deleteComment(commentId, parentId)),
    updateCommentScore: (commentId, type) => dispatch(updateCommentScore(commentId, type)),
    setCommentSortMethod: (payload) => dispatch(setCommentSortMethod(payload)),
    getCommentToBeEdited: (payload) => dispatch(getCommentToBeEdited(payload)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailView));

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 0 0 32px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 95%;
  max-width: 1024px;
`;

const PostContent = styled.div`
    overflow-wrap: break-word;
    padding: 40px 16px 40px;
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
  padding: 16px 32px;
  border-radius: 2px 2px 0px 0px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 5px;
`;

const SubmitCommentWrapper = styled.div`
  width: 100%;
  order: 2;
`;

const FilterDiv = styled.div`
  font-size: 12px;
`;

const TopPart = styled.div`
    border-radius: 2px 2px 0px 0px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 5px;
    padding: 0 32px;
    margin: 16px 0 0;
`;

const CommentsHeader = styled.h3`
  margin: 0;
  padding: 0;
  color: #4B5862;
  font-size: 16px;
  font-weight: normal;
`;

const CommentsInfo = styled.div`
  padding: 0 22px;
  margin: 16px 0 0;
`;
