import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VotingComponent = ({ score }) => (
  <VoteWrapper>
    <Vote className="clear-it up"> ▲ </Vote>
    <ScoreSpan className="clear-it"> {score} </ScoreSpan>
    <Vote className="clear-it down"> ▼ </Vote>
  </VoteWrapper>
);

VotingComponent.defaultProps = {
  score: 999,
};

VotingComponent.propTypes = {
  score: PropTypes.number,
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
