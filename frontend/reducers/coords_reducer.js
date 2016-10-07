import { CoordsConstants } from '../actions/coords_actions.js';
import { merge } from 'lodash';

let defaultState = {lat: 37.7820468, lng: -122.4415872 }
const SpacetimeReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case CoordsConstants.UPDATE_COORDS:
      newState = action.coords;
      return newState;
    default:
      return state;
  }
};

export default SpacetimeReducer;
