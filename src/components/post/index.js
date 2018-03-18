/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import moment from 'moment';
import { Link } from 'react-router-dom';

import VotingComponent from '../votingComponent/index';

// @TODO: if current route is /detail then setDetailId wont be dispatched
const Post = ({
  title,
  timestamp,
  author,
  category,
  commentCount,
  voteScore,
  voteHandler,
  postId,
  deletePostHandler,
  modalToShow,
  toggleModal,
  getPostToBeEditedData,
}) => {
  const momentObj = moment(timestamp);
  const handleEditClick = () => {
    getPostToBeEditedData(postId);
    modalToShow('editPostModal');
    toggleModal();
  };
  return (
    <PostsWrapper>
      <SubWrapper>
        <VotingComponent voteId={postId} voteHandler={voteHandler} voteScore={voteScore} />
        <PostContent>
          <Main>
            <PostTitle className="clear-it">
              <CustomLink to={`/${category}/${postId}`}>{title}</CustomLink>
            </PostTitle>
            <SubTitle className="clear-it">
              Submitted {momentObj.fromNow()} by &nbsp;
              <AuthorText>{author}</AuthorText> in &nbsp;
              <Link
                alt="category"
                to={`/${category}`}
              >
                {category}
              </Link>
            </SubTitle>
            <CommentsSpan className="clear-it">
              {commentCount} Comment(s)
            </CommentsSpan>
          </Main>
          <Actions>
            <IconButton tooltip="Edit" >
              <Edit color="#888888" onClick={() => handleEditClick()} />
            </IconButton>
            <IconButton tooltip="delete" >
              <Delete color="#888888" onClick={() => deletePostHandler(postId)} />
            </IconButton>
          </Actions>
        </PostContent>
      </SubWrapper>
    </PostsWrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  voteHandler: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  deletePostHandler: PropTypes.func.isRequired,
  modalToShow: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  getPostToBeEditedData: PropTypes.func.isRequired,
};

export default Post;


const PostsWrapper = styled.div`
  order: 1;
  width: 100%;
  max-width: 1280px;
  display: block;
  clear: both;
  margin: 16px 0 0;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 16px 0;
  border-radius: 2px;
`;

const PostContent = styled.div`
  order:2;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PostTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const SubTitle = styled.span`
  font-size: 12px;
  color: #b3b3b3;
`;

const Main = styled.div`
  order: 1;
`;

const Actions = styled.div`
  order: 2;
  display: flex;
  flex-basis: 50px;
`;

const CommentsSpan = styled.span`
  color: #4F8EF7;
  font-weight: 700;
  font-size: 13px;
`;

const CustomLink = styled(Link)`
  color: #4f8ef7;
  font-size: 18px;
  font-weight: normal;
 &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const AuthorText = styled.strong`
  color: #4f8ef7;
  font-weight: 400;
`;
