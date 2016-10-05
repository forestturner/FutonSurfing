import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';


let defaultState = {bounds: {northEast:{lat: 60, lng: 130}, southWest: {lat: -60, lng: -130}}, location: {} }

const FilterReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
    debugger;
      newState = merge({}, state);
      newState.bounds = action.bounds;
      return newState;
    default:
      return state;
  }
};

export default FilterReducer;
