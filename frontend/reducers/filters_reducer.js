import { FilterConstants } from '../actions/filter_actions';
import { merge } from 'lodash';

let defaultState = {bounds: {}, location: {} }

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
