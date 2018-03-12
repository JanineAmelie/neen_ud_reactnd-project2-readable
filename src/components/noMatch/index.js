import React from 'react';
import styled from 'styled-components';

const NoMatch = () => {
  return (
    <Wrapper><SpanTitle className="spanTitle">404</SpanTitle></Wrapper>
  );
};

NoMatch.propTypes = {
};

export default NoMatch;


const Wrapper = styled.div`
  order: 1;
  width: 100%;
  max-width: 1280px;
  display: block;
  clear: both;
  margin: 16px 0 0;

`;

const SpanTitle = styled.span`
width: 100%;
height: 100%;
   font-size: 10em;
`;