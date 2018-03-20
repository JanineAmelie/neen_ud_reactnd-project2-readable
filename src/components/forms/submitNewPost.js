/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import faker from 'faker';

import utils from '../../utilities';

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

class SubmitNewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: faker.fake('{{hacker.phrase}}'),
      author: faker.fake('{{name.firstName}}, {{name.lastName}}'),
      body: faker.fake('{{lorem.paragraphs}}'),
      category: utils.randomCategory(this.props.categories),
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTextValueChange = this.handleTextValueChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ author: event.target.value });
  }

  handleTextValueChange(event) {
    this.setState({ body: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitNewPost(this.state);
    this.props.handleModalClose();
  }
  render() {
    return (
      <FormWrapper>
        <TopWrapper>
          <FormTitle>Submit a new post</FormTitle>
        </TopWrapper>
        <form onSubmit={this.handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label htmlFor="titleValue"> Post Title:</label>
              <input required type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </li>

            <li>
              <label htmlFor="textBody"> Post Body: </label>
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
              <label htmlFor="category"> Category: </label>
              <select
                className="new-post-select"
                required
                value={this.state.category}
                onChange={this.handleCategoryChange}
              >
                {this.props.categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>))
                }
              </select>
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

SubmitNewPostForm.propTypes = {
  categories: PropTypes.array.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  submitNewPost: PropTypes.func.isRequired,
};

export default SubmitNewPostForm;

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

