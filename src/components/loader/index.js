import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';
const ProgressSpinnerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`;

const Loader = () => (
  <ProgressSpinnerDiv>
    <CircularProgress style={{ margin: '0 auto' }}  size={60} thickness={7} />
  </ProgressSpinnerDiv>
);


export default Loader;
