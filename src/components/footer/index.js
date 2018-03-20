/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Footer = () => {
  const year = moment().year();
  return (
    <Wrapper>
      <span className="clear-it"> Website by Janine "Neen" Amelie Lourens, </span>
      <span className="clear-it">Created during her enrollment in the Udacity React Nanodegree program.</span>
      <span className="clear-it"> Backend provided by Udacity, everything else, is copyright © Neen {year}</span>
    </Wrapper>
  );
};

Footer.propTypes = {
};

export default Footer;


const Wrapper = styled.div`
  order: 1;
  width: 100%;
  display: block;
  clear: both;
  margin: 16px auto 0 ;
  text-align: center;
  font-size:12px;
  position: absolute;
  bottom: 0;
  padding: 0 0 8px;
  color: #b3b3b3;
`;