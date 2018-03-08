import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import VotingComponent from '../votingComponent/index';

const Comment = () => (
  <CommentWrapper>
    <SubWrapper>
      <VotingComponent />
      <PostContent>
        <Main>
          <UserSpan className="clear-it"> <strong>user</strong></UserSpan>
          <CommentContent className="clear-it">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cum eaque esse harum ipsa ipsum magnam nulla, totam ut. Consectetur eaque earum id incidunt inventore
            ipsa quae, quas ratione sunt vitae?
          </CommentContent>
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
  </CommentWrapper>
);

Comment.defaultProps = {
};

Comment.propTypes = {
};

export default Comment;


const CommentWrapper = styled.div`
  order: 2;
  width: 100%;
  max-width: 1280px;
  display: block;
  clear: both;
  margin: 16px 0;
`;

const SubWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const PostContent = styled.div`
  order:2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #F0E0D6;
  border: 1px solid #D9BFB7;
  padding: 16px;
`;

const CommentContent = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const UserSpan = styled.span`
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
