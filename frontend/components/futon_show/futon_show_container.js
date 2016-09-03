import {connect} from 'react-redux';
import FutonShow from './futon_show';
import {requestFuton} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
  const futonId = parseInt(ownProps.params.futonId);
  const futon = state.futons[futonId] || {};
  return {
    futonId,
    futon
  };
};

// const mapdispatchToProps = dispatch => ({
//   requestFuton: id => dispatch(requestFuton(id))
// });

export default connect(
  mapStateToProps
  // mapdispatchToProps
)(FutonShow);
