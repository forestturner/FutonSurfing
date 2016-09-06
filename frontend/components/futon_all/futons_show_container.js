import {connect} from 'react-redux';
import FutonsShow from './futons_show';
import {updateFilter} from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
   let futons = state.futons;
   let width = state.session.width;
   let height = state.session.height;
  //  let city = state.filters.city;
  return {
    futons,
    width,
    height
    // city
  }
}
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutonsShow);
