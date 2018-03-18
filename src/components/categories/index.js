/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import Communication from 'material-ui/svg-icons/communication/comment';

const activeStyle = {
  fontWeight: 'bold',
  color: '#fff',
  borderBottom: '2px solid white',
  height: 49,
  marginTop: 38,
  padding: '0 8px',
};
const SvgStyles = {
  height: 42,
  marginRight: 10,
  width: '100%',
  color: '#fff',
  display: 'inline!important',
};

const Categories = (props) => {
  const categoriesJSX = props.categories.map((category, index) => (
    <ItemSpan key={index}>
      <Category exact activeStyle={activeStyle} to={`/${category.name}`}>{category.name}</Category>
    </ItemSpan>
  ));
  const allItemJsx = (
    <ItemSpan key="allItem">
      <Category exact activeStyle={activeStyle} alt="All Category" to="/">All</Category>
    </ItemSpan>
  );
  return (
    <CategoryWrapper className="header">
      <TopDiv> This is just Dummy Text - Put Here to make things look fancy - lol - thanks for reading - </TopDiv>
      <SubDiv>
        <Logo>
          <Communication width={42} color="white" style={SvgStyles} />
          <MainHeader>
            <MainLink to="/">READABLE</MainLink>
          </MainHeader>
        </Logo>
        <ItemsDiv>
          {allItemJsx}{categoriesJSX}
        </ItemsDiv>
      </SubDiv>
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
  overflow-wrap: break-word;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  background-color: #2196F3;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;

const TopDiv = styled.div`
  width: 100%;
  height: 24px;
  clear: both;
  background-color: #006FD2;
  color: rgba(255,255,255,0.6);
  font-size: 10px;
  text-transform: uppercase;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0;
`;

const Logo = styled.div`
  margin: 0;
  padding: 0;
  font-size: 40px;
  order: 1;
  display: flex;
  flex-wrap: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

const MainHeader = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 48px;
  font-weight: 500;
`;
const ItemSpan = styled.span`
  height: 54px;
  width: 60px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;
`;
const Category = styled(NavLink)`
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  display: inline-block;
  margin: 0 4px;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  width: 100%;
`;

const SubDiv = styled.div`
  clear: both;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 16px;
`;

const ItemsDiv = styled.div`
  order: 2;
  display: flex;
  align-content: center;
  margin-left: 16px;
`;

const MainLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: none;
    color: #b3dafc;
  }
  &::after {
    content: "by Neen <3";
    color: #e8c1ff;
    font-size: 12px;
    position: absolute;
    bottom: 16px;
    left: 270px;
    transform: rotate(-18deg);
  }
`;
