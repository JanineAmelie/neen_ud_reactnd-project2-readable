import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import VotingComponent from '../votingComponent/index';

const Post = () => (
  <PostsWrapper>
    <SubWrapper>
      <VotingComponent />
      <PostContent>
        <Main>
          <PostTitle className="clear-it"> This is a post</PostTitle>
          <SubTitle className="clear-it"> Submitted 1 day ago by <strong>user</strong></SubTitle>
          <CommentsSpan className="clear-it">
            [100 Comments]
          </CommentsSpan>
        </Main>
        <Actions>
          <IconButton tooltip="Edit" >
            <Edit />
          </IconButton>
          <IconButton tooltip="delete" >
            <Delete />
          </IconButton>
        </Actions>
      </PostContent>
    </SubWrapper>
  </PostsWrapper>
);

Post.defaultProps = {
};

Post.propTypes = {
};

export default Post;


const PostsWrapper = styled.div`
  order: 1;
  width: 100%;
  max-width: 1280px;
  display: block;
  clear: both;
  margin: 16px 0 0;
`;

const SubWrapper = styled.div`
    background-color: #F0E0D6;
    border: 1px solid #D9BFB7;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 16px 0;
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
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SubTitle = styled.span`
  font-size: 1em;
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
  &:hover {
    cursor: pointer;
  }
`;
