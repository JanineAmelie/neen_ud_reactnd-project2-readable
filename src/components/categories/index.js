import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Categories = ({ categoriesArray }) => (
  <CategoryWrapper className="categories">
    [
    { categoriesArray.map((category) => (
      <span>
        <Category alt={category} key={category} href={category}>{category}</Category> /
      </span>))
    }
    ]
  </CategoryWrapper>
);

Categories.defaultProps = {
  categoriesArray: ['react', 'redux', 'udacity', 'foo,', 'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
    'laoreet', 'auctor', 'mauris'],
};

Categories.propTypes = {
  categoriesArray: PropTypes.array,
};

export default Categories;

const CategoryWrapper = styled.div`
  margin: 0;
  position: relative;
  top: 0;
  padding: 8px 8px;
  overflow-wrap: break-word;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Category = styled.a`
  color: #800000;
  padding-left: 6px;
  &:hover {
  text-decoration: underline;
  }
`;
