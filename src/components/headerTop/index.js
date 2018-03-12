import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import CuteDog from '../../assets/images/cute-dog.jpg';

const styles = {
  hr: {
    height: '1px',
    width: '50%',
  },
  btn: {
    display: 'block',
    margin: '0 auto',
    clear: 'both',
    maxWidth: '125px',
  },
};

const HeaderTop = ({ currentCategory, modalToShow, toggleModal }) => {
  const handleButtonClick = () => {
    modalToShow('submitPostModal');
    toggleModal();
  };
  return (
    <Wrapper>
      <AppHeader className="header">
        <div className="clear-it">
          <BannerContainer>
            <img alt="header-pic" src={CuteDog} />
          </BannerContainer>
          <Title>/u/dacity</Title>
          <SubTitle> {currentCategory} </SubTitle>
        </div>
        <hr style={styles.hr} className="clear-it" />
        <br />
      </AppHeader>
      <RaisedButton
        label="Submit"
        labelPosition="before"
        primary
        icon={<AddIcon />}
        onClick={() => handleButtonClick()}
        style={styles.btn}
      />

      <hr style={styles.hr} className="clear-it" />
    </Wrapper>
  );
};

HeaderTop.defaultProps = {
};

HeaderTop.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalToShow: PropTypes.func.isRequired,
};

export default HeaderTop;

const Wrapper = styled.div``;

const BannerContainer = styled.div`
    border: 1px solid #800;
    margin: 5px auto;
    width: 301px;
    height: 100px;
    max-width: 100%;
    display: block;
    clear: both;
`;

const Title = styled.h1`
  color: #800000;
  font-family: Tahoma,sans-serif;
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const SubTitle = styled.h2`
    color: #117743;
    font-size: 25px;
    font-style: italic;
    margin: 8px 0;
    padding: 0;
`;

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;
