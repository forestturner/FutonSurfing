import { SearchConstants } from '../actions/search_actions';
import { merge } from 'lodash';

let defaultState = {lat: 37, lng: -122}

const SearchReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case SearchConstants.UPDATE_SEARCH:
      newState = action.search;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
