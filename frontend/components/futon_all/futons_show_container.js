import {connect} from 'react-redux';
import FutonsShow from './futons_show';

const mapStateToProps = (state, ownProps) => {
   let futons = state.futons;
  return {
    futons
  }
}
export default connect(
  mapStateToProps
)(FutonsShow);
