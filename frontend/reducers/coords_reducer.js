import { CoordsConstants } from '../actions/coords_actions.js';
import { merge } from 'lodash';

<<<<<<< HEAD
let defaultState = {lat: 37.7820468, lng: -122.4415872 }
=======
let defaultState = {lat: 38, lng: -122 }

>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
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
