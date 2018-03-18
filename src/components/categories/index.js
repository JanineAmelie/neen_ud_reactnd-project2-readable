/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold',
  color: '#800000!important',
};

const Categories = (props) => {
  const categoriesJSX = props.categories.map((category, index) => (
    <span key={index}>
       &nbsp; / <Category exact activeStyle={activeStyle} to={`/${category.name}`}>{category.name}</Category>&nbsp;
    </span>
  ));
  const allItemJsx = (
    <span key="allItem">
      <Category exact activeStyle={activeStyle} alt="All Category" to="/">All</Category>
    </span>
  );
  return (
    <CategoryWrapper className="categories">
      [{allItemJsx}{categoriesJSX}]
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
  padding: 8px 0;
  overflow-wrap: break-word;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 16px;
  text-align: center;
`;

const Category = styled(NavLink)`
  color: #00E;
  padding-left: 6px;
  &:hover {
  text-decoration: underline;
  }
`;
