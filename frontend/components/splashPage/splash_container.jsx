import { updateCoords } from '../../actions/coords_actions.js';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  coords: state.coords
});

const mapDispatchToProps = (dispatch) => ({
  updateCoords: (coords) => dispatch(updateCoords(coords))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
