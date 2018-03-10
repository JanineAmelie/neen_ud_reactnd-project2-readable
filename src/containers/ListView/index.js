import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Post from '../../components/post/index';
import HeaderTop from '../../components/headerTop/index';

// @TODO: styled components classnames
class ListView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('this is the list view');
  }

  render() {
    return (
      <Wrapper className="List-View">
        <HeaderTop />
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Content>
      </Wrapper>
    );
  }
}

ListView.propTypes = {
};

// (state, props)
// function mapStateToProps(state) {
//   return {
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListView);

export default ListView;

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
