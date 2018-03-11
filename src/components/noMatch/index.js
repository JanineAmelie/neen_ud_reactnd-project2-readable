import React from 'react';
import styled from 'styled-components';

const NoMatch = () => {

  return (
    <Wrapper>404</Wrapper>
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