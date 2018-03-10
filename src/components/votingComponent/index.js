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
      <Vote onClick={handleVoteClick('upVote')} className="clear-it up"> ▲ </Vote>
      <ScoreSpan className="clear-it"> {voteScore} </ScoreSpan>
      <Vote onClick={handleVoteClick('downVote')} className="clear-it down"> ▼ </Vote>
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

const ScoreSpan = styled.span`
  
`;
