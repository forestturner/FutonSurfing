import {connect} from 'react-redux';
import FutonsShow from './futons_show';
import {updateFilter} from '../../actions/filter_actions';
import {requestFutons} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
   let futons = state.futons;
   let width = state.session.width;
   let height = state.session.height;
   let coords = state.coords;
  return {
    futons,
    width,
    height,
    coords
    // city
  }
}
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  requestFutons: () => dispatch(requestFutons())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutonsShow);
