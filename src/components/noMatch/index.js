import React from 'react';
import styled from 'styled-components';

const NoMatch = () => {
  return (
    <Wrapper className="404">
      <Item><img src="https://media.giphy.com/media/gxxlowyvtfS0M/giphy.gif" alt="404" /> </Item>
      <Item className="clear-it"><Title className="title">404</Title></Item>
      <Item className="clear-it"><Message>Page not found</Message></Item>
    </Wrapper>
  );
};

NoMatch.propTypes = {
};

export default NoMatch;


const Wrapper = styled.div`
  order: 1;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  display: flex;
  margin: 16px 0 0;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 10em;
  margin: 0 auto;
  padding: 0;
`;

const Message = styled.h4`
    margin: 0 auto;
  padding: 0;
`;
const Item = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-content: center;
  align-items: center;
  
`;
