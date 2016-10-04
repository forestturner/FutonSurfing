import {connect} from 'react-redux';
import FutonShow from './futon_show';
import {requestFuton} from '../../actions/futon_actions';
import {updateFilter} from '../../actions/filter_actions';
import {requestFutons} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
  // const currentUserFutonId = state.session.currentUser.futon.id
  const futonId = parseInt(ownProps.params.futonId);
  const futons = state.futons[futonId] || {};
  const futon = state.futons[futonId] || {};
  return {
    futonId,
    futon,
    // currentUserFutonId,
    futons
  };
};
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestFutons: () => dispatch(requestFutons())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutonShow);
