import { connect } from 'react-redux';

import LettersGrid from '../../components/organisms/LettersGrid';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LettersGrid);