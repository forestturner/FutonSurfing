import {connect} from 'react-redux';
import FutonsShow from './futons_show';
import {updateFilter, updateBounds} from '../../actions/filter_actions';
import {requestFutons} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
   let futons = state.futons.futons;
   let width = state.session.width;
   let height = state.session.height;
   let coords = state.coords;
   let filters = state.filters;
  return {
    futons,
    width,
    height,
    coords,
    filters
    // city
  }
}
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  requestFutons: () => dispatch(requestFutons())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutonsShow);
