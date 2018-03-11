import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VotingComponent = ({ voteId, voteHandler, voteScore }) => {
  // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
  const handleVoteClick = (upOrDown) => () => {
    voteHandler(voteId, upOrDown);
  };

  return (
    <VoteWrapper>
      <VoteUp onClick={handleVoteClick('upVote')} className="clear-it"> ▲ </VoteUp>
      <span className="clear-it"> {voteScore} </span>
      <VoteDown onClick={handleVoteClick('downVote')} className="clear-it"> ▼ </VoteDown>
    </VoteWrapper>
  );
};


VotingComponent.propTypes = {
  voteId: PropTypes.string.isRequired,
  voteHandler: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default VotingComponent;

const VoteWrapper = styled.div`
  order:1;
  flex-basis: 64px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: center;
`;

const Vote = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const VoteUp = styled(Vote)`
  color: orangered;
`;

const VoteDown = styled(Vote)`
  color: #6b6bea;
`;
