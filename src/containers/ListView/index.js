import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Post from '../../components/post/index';
import HeaderTop from '../../components/headerTop/index';
import { updatePostScore } from './actions';


// @TODO: styled components classnames
class ListView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }

  render() {
    return (
      <Wrapper className="List-View">
        <HeaderTop currentCategory={this.props.currentCategory} />
        <SelectionWrapper>
          <SelectField
            floatingLabelText="Filter"
            floatingLabelFixed
            value={1}
            onChange={this.handleChange}
            floatingLabelStyle={{ fontSize: '1em', textAlign: 'left', color: '#00E' }}
            underlineStyle={{ color: '#800000' }}
          >
            <MenuItem value={1} primaryText="Date" />
            <MenuItem value={2} primaryText="Upvotes" />
          </SelectField>

        </SelectionWrapper>
        <hr />
        <Content>
          {this.props.posts.length > 0 && this.props.posts.map((post) => (
            <Post
              voteHandler={this.props.updatePostScore}
              key={post.id}
              postId={post.id}
              title={post.title}
              timestamp={post.timestamp}
              author={post.author}
              category={post.category}
              commentCount={post.commentCount}
              voteScore={post.voteScore}

            />
          ))}
        </Content>
      </Wrapper>
    );
  }
}

ListView.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  posts: PropTypes.array,
  updatePostScore: PropTypes.func.isRequired,
};
// (state, props)
function mapStateToProps(state) {
  return {
    currentCategory: state.app.currentCategory,
    posts: state.posts.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePostScore: (postId, upOrDown) => dispatch(updatePostScore(postId, upOrDown)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ListView);


const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: block;
  position: relative;
  margin: 0 auto;
`;

const SelectionWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
