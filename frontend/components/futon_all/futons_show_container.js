import {connect} from 'react-redux';
import FutonsShow from './futons_show';
<<<<<<< HEAD
import {updateFilter, updateBounds} from '../../actions/filter_actions';
import {requestFutons} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
   let futons = state.futons.futons;
   let width = state.session.width;
   let height = state.session.height;
   let coords = state.coords;
   let filters = state.filters;
=======
import {updateFilter} from '../../actions/filter_actions';
import {requestFutons} from '../../actions/futon_actions';

const mapStateToProps = (state, ownProps) => {
   let futons = state.futons;
   let width = state.session.width;
   let height = state.session.height;
   let coords = state.coords;
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
  return {
    futons,
    width,
    height,
<<<<<<< HEAD
    coords,
    filters
=======
    coords
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
    // city
  }
}
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
<<<<<<< HEAD
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
  requestFutons: () => dispatch(requestFutons())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutonsShow);
