import { FutonConstants } from '../actions/futon_actions';
import merge from 'lodash/merge';

const FutonsReducer = function(state = {futons: [],errors: []}, action){
  let newState;
  switch(action.type){
    case FutonConstants.RECEIVE_FUTONS:
    debugger;
      newState = {futons: action.futons, errors: []};
      return newState;
    case FutonConstants.RECEIVE_FUTON:
      const futon = {[action.futon.id]: action.futon};
      return merge({}, state, futon);
    default:
      return state;
  }
};

export default FutonsReducer;
