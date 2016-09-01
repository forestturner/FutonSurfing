import { FutonConstants } from '../actions/futon_actions';
import merge from 'lodash/merge';

const FutonsReducer = function(state = {}, action){
  switch(action.type){
    case FutonConstants.RECEIVE_FUTONS:
      return action.futons;
    case FutonConstants.RECEIVE_FUTON:
      const newFuton = {[action.futon.id]: action.futon};
      return merge({}, state, newFuton);
    default:
      return state;
  }
};

export default FutonsReducer;
