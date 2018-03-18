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

const HeaderTop = ({ modalToShow, toggleModal }) => {
  const handleButtonClick = () => {
    modalToShow('submitPostModal');
    toggleModal();
  };
  return (
    <Wrapper>
      <RaisedButton
        label="Submit"
        labelPosition="before"
        primary
        icon={<AddIcon />}
        onClick={() => handleButtonClick()}
        style={styles.btn}
      />
    </Wrapper>
  );
};
HeaderTop.defaultProps = {
};

HeaderTop.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalToShow: PropTypes.func.isRequired,
};

export default HeaderTop;

const Wrapper = styled.div`
    padding: 16px 0;
`;
