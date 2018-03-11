import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from '../../components/post';
import Comment from '../../components/comment';

class DetailView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('this is the list view');
  }

  render() {
    return (
      <Wrapper className="Detail-View">
        <Content>
          {/*<Post*/}
            {/*getPostToBeEditedData={this.props.getPostToBeEditedData}*/}
            {/*modalToShow={this.props.modalToShow}*/}
            {/*toggleModal={this.props.toggleModal}*/}
            {/*deletePostHandler={this.props.deletePost}*/}
            {/*voteHandler={this.props.updatePostScore}*/}
            {/*key={post.id}*/}
            {/*postId={post.id}*/}
            {/*title={post.title}*/}
            {/*timestamp={post.timestamp}*/}
            {/*author={post.author}*/}
            {/*category={post.category}*/}
            {/*commentCount={post.commentCount}*/}
            {/*voteScore={post.voteScore}*/}
          {/*/>*/}
          <PostContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at, autem doloremque dolores eius eveniet
            labore magnam minima, minus molestias optio pariatur, placeat quos repellendus sed sequi tempora tenetur
            vitae?
          </PostContent>
          <CommentsWrapper>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </CommentsWrapper>
        </Content>
      </Wrapper>
    );
  }
}

DetailView.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);


const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: block;
  position: relative;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostContent = styled.div`
    border: 1px solid #D9BFB7;
    overflow-wrap: break-word;
    padding: 40px 16px 40px;
    background-color: aliceblue;
    width: 100%;
    margin: 0 auto;
    clear: both;
    display: block;
    order: 1;
`;

const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  order: 1;
`;
