import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Clear from 'material-ui/svg-icons/content/clear';

import SubmitNewPostForm from '../../components/forms/submitNewPost';
import EditPostForm from '../../components/forms/editPost';
import SubmitNewCommentForm from '../../components/forms/submitNewComment';
import EditCommentForm from '../../components/forms/editComment';

import { removeCurrentlyEditingPost, submitEditedPost, submitNewPost } from '../ListView/actions';
import { setModalToShow, toggleModal } from './actions';
import Loader from '../../components/loader';
import { removeCurrentlyEditingComment, submitEditedComment, submitNewComment } from '../DetailView/actions';


class Modal extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  handleModalClose() {
    this.props.setModalToShow('');
    this.props.removeCurrentlyEditingPost();
    this.props.removeCurrentlyEditingComment();
    this.props.toggleModal();
  }
  modalToRender(modalToShow) {
    switch (modalToShow) {
      case 'submitPostModal':
        return (<SubmitNewPostForm
          categories={this.props.categories}
          handleModalClose={() => this.handleModalClose()}
          submitNewPost={(data) => this.props.submitNewPost(data)}
        />);
      case 'submitCommentModal':
        return (<SubmitNewCommentForm
          handleModalClose={() => this.handleModalClose()}
          parentId={this.props.detailId}
          submitNewComment={(data) => this.props.submitNewComment(data)}
        />);
      case 'editPostModal':
        return (<EditPostForm
          handleModalClose={() => this.handleModalClose()}
          postToEdit={this.props.postToEdit}
          submitEditedPost={this.props.submitEditedPost}
        />);
      case 'editCommentModal':
        return (<EditCommentForm
          handleModalClose={() => this.handleModalClose()}
          commentToEdit={this.props.commentToEdit}
          submitEditedComment={this.props.submitEditedComment}
        />);
      default:
        return <Loader />;
    }
  }
  render() {
    return (
      <WrapperOverlay
        className="modal"
        modalIsOpen={this.props.modalIsOpen}
      >
        <ModalContent>
          {this.modalToRender(this.props.modalToShow)}
          <CloseBtnContainer className="close-btn">
            <CloseBtn onClick={() => this.handleModalClose()} />
          </CloseBtnContainer>
        </ModalContent>
      </WrapperOverlay>
    );
  }
}

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setModalToShow: PropTypes.func.isRequired,
  modalToShow: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  submitNewPost: PropTypes.func.isRequired,
  submitEditedPost: PropTypes.func.isRequired,
  submitEditedComment: PropTypes.func.isRequired,
  postToEdit: PropTypes.object.isRequired,
  commentToEdit: PropTypes.object.isRequired,
  removeCurrentlyEditingPost: PropTypes.func.isRequired,
  removeCurrentlyEditingComment: PropTypes.func.isRequired,
  submitNewComment: PropTypes.func.isRequired,
  detailId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    categories: state.app.categories,
    modalIsOpen: state.modal.modalIsOpen,
    modalToShow: state.modal.modalToShow,
    postToEdit: state.posts.currentlyEditingPost,
    commentToEdit: state.detail.currentlyEditingComment,
    detailId: state.detail.detailId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCurrentlyEditingComment: () => dispatch(removeCurrentlyEditingComment()),
    removeCurrentlyEditingPost: () => dispatch(removeCurrentlyEditingPost()),
    setModalToShow: (payload) => dispatch(setModalToShow(payload)),
    toggleModal: () => dispatch(toggleModal()),
    submitNewPost: (payload) => dispatch(submitNewPost(payload)),
    submitEditedPost: (payload) => dispatch(submitEditedPost(payload)),
    submitEditedComment: (payload) => dispatch(submitEditedComment(payload)),
    submitNewComment: (payload) => dispatch(submitNewComment(payload)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);


const WrapperOverlay = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0; left: 0; right:0; bottom:0;
  display: flex;
  justify-content: center; /* horizontal for default flow*/
  align-items: center; /* vertical for default flow */
  background: rgba(0,0,0,0.6);
  ${(props) => props.modalIsOpen ? '' : 'display: none'};
  z-index: 700;
  padding: 60px 0 0 0;
`;


const ModalContent = styled.div`
  width: 80%;
  height: 600px;
  background: white;
  border-radius: 5px;
  z-index: 900;
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background: linear-gradient(to bottom, rgba(248,215,180,1) 0%,rgba(255,255,240,1) 100%);
  background-repeat: no-repeat;
  color: #800000;
`;

const CloseBtn = styled(Clear)`
  align-self: center;
  position: absolute;
  left: 13px;
  color: #fff!important;
`;

const CloseBtnContainer = styled.div`
  position: relative;
   &:hover {
    cursor: pointer;
  }
  order:2;
  z-index: 999;
  opacity: 1;
  color: #fff!important;
  height: 69px;
  width: 64px;
  display: flex;
  background-color: #117743;
  align-items: center;
  align-content: center;
`;
