/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Categories = (props) => {
  const categoriesJSX = props.categories.map((category, index) => (
    <span key={index}>
      <Category alt={category.name} href={category.name}>{category.name}</Category> /
    </span>
  ));

  return (
    <CategoryWrapper className="categories">
      [{categoriesJSX}]
    </CategoryWrapper>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
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
  text-align: center;
`;

const Category = styled.a`
  color: #800000;
  padding-left: 6px;
  &:hover {
  text-decoration: underline;
  }
`;
