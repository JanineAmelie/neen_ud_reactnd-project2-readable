import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import VotingComponent from '../votingComponent/index';

const Comment = ({
  deleteCommentHandler,
  editCommentHandler,
  voteCommentHandler,
  commentScore,
  commentId,
  body,
  author,
  timestamp,
  parentId,
}) => {
  const momentObj = moment(timestamp);
  return (
    <CommentWrapper>
      <SubWrapper>
        <VotingComponent
          voteHandler={voteCommentHandler}
          voteId={commentId}
          voteScore={commentScore}
        />
        <PostContent>
          <Main>
            <UserSpan className="clear-it"> <strong>{author}</strong></UserSpan>
            <TimeStamp className="clear-it"> Submitted {momentObj.fromNow()}</TimeStamp>
            <CommentContent className="clear-it">
              {body}
            </CommentContent>
          </Main>
          <Actions>
            <IconButton tooltip="Edit" >
              <Edit onClick={() => editCommentHandler(commentId)} />
            </IconButton>
            <IconButton tooltip="delete" >
              <Delete onClick={() => deleteCommentHandler(commentId, parentId)} />
            </IconButton>
          </Actions>
        </PostContent>
      </SubWrapper>
    </CommentWrapper>
)};

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteCommentHandler: PropTypes.func.isRequired,
  commentScore: PropTypes.number.isRequired,
  commentId: PropTypes.string.isRequired,
  deleteCommentHandler: PropTypes.func.isRequired,
  editCommentHandler: PropTypes.func.isRequired,
  timestamp: PropTypes.number.isRequired,
  parentId: PropTypes.string.isRequired,
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

const TimeStamp = styled.span`
  margin-bottom: 16px;
  color: #6b6bea;
  font-size: 14px;
`;

const Main = styled.div`
  order: 1;
  width: 100%;
  white-space: pre-wrap; 
`;

const Actions = styled.div`
  order: 2;
  display: flex;
  flex-basis: 50px;
`;
