import { updateCoords } from '../../actions/coords_actions.js';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  coords: state.coords,
  cities: {
    'San Francisco': [37.759, -122.446, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151466/SanFrancisco_0_l783ph.jpg'],
    'Los Angeles': [34.052235, -118.243683, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151360/Los_Angeles_Skyline_telephoto_k5tp37.jpg'],
    'San Diego': [32.842674, -117.257767, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151228/san-diego_y9wdnb.jpg'],
    'New York': [40.740533, -73.998207, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151226/new-york-city_weujjw.jpg'],
    // 'St. Louis': [38.627003, ‎-90.199402, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151401/St_Louis_hero_cro_k78mel.jpg'],
    'Seattle': [47.6062, 122.3321, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151395/seattle_dzxwgt.jpg'],
    'Paris': [48.855449, 2.341032, 'http://res.cloudinary.com/dnuopy1ir/image/upload/v1474151263/paris_xyb5ml.jpg']
  }
});

const mapDispatchToProps = (dispatch) => ({
  updateCoords: (coords) => dispatch(updateCoords(coords))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
