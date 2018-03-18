/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import faker from 'faker';

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
    marginTop: '40px',
  },
  roundBtn: {
    width: 50,
    height: 50,
    borderRadius: 900,
    minWidth: 50,
    alignSelf: 'flex-end',
  },
};

class SubmitCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentId: props.parentId,
      author: faker.fake('{{name.firstName}}, {{name.lastName}}'),
      body: faker.fake('{{hacker.phrase}}'),
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTextValueChange = this.handleTextValueChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ author: event.target.value });
  }

  handleTextValueChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitNewComment(this.state);
    this.props.handleModalClose();
  }
  render() {
    return (
      <FormWrapper>
        <TopWrapper>
          <FormTitle>Submit a new comment</FormTitle>
        </TopWrapper>
        <form onSubmit={this.handleSubmit}>
          <ul className="flex-outer">

            <li>
              <label htmlFor="textBody"> Comment Body: </label>
              <textarea
                required
                name="textBody"
                rows="6"
                value={this.state.body}
                onChange={this.handleTextValueChange}
              />
            </li>

            <li>
              <label htmlFor="userNameValue"> Username: </label>
              <input required type="text" value={this.state.author} onChange={this.handleUsernameChange} />
            </li>

            <li>
              <RaisedButton
                label="Submit"
                labelPosition="before"
                primary
                icon={<AddIcon />}
                type="submit"
                style={styles.btn}
              />
            </li>
          </ul>
        </form>
      </FormWrapper>
    );
  }
}

SubmitCommentForm.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  submitNewComment: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default SubmitCommentForm;

const FormTitle = styled.h2`
  margin: 0;
  padding: 0;
  flex-basis: 100%;
  order: 1;
  font-size: 2em;
  text-align: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #2196F3;
  color: #fff;
  padding: 16px;
  margin-bottom: 48px;
`;

