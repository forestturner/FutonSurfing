import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

<<<<<<< HEAD

let defaultState = {bounds: {northEast:{lat: 60, lng: 130}, southWest: {lat: -60, lng: -130}}, location: {} }

const FilterReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      newState = merge({}, state);
      newState.bounds = action.bounds;
      return newState;
    default:
      return state;
  }
};

export default FilterReducer;
=======
const _defaultFilters = Object.freeze({
  bounds:{}
});

const FiltersReducer = function(state = _defaultFilters, action){
  if (action.type === FilterConstants.UPDATE_FILTER){
    const newFilter = {[action.filter]: action.value};
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
