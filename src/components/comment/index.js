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
            <UserSpan className="clear-it"> {author}</UserSpan>
            <TimeStamp className="clear-it"> Submitted {momentObj.fromNow()}</TimeStamp>
            <CommentContent className="clear-it">
              {body}
            </CommentContent>
          </Main>
          <Actions>
            <IconButton tooltip="Edit" >
              <Edit color="#888888" onClick={() => editCommentHandler(commentId)} />
            </IconButton>
            <IconButton tooltip="delete" >
              <Delete color="#888888" onClick={() => deleteCommentHandler(commentId, parentId)} />
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
  border-bottom: 1px solid #f2f2f2
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
  padding: 0 16px 16px 0;
`;

const CommentContent = styled.p`
  width: 100%;
  margin: 0;
  font-size: 14px;
  padding: 8px 0 8px 4px;
`;

const UserSpan = styled.span`
  font-size: 1em;
  color: #4f8ef7;
`;

const TimeStamp = styled.span`
  font-size: 12px;
  color: #b3b3b3;
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
