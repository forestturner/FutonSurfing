import { FutonConstants } from '../actions/futon_actions';
import merge from 'lodash/merge';

<<<<<<< HEAD
const FutonsReducer = function(state = {futons: [],errors: []}, action){
  let newState;
  switch(action.type){
    case FutonConstants.RECEIVE_FUTONS:
      newState = {futons: action.futons, errors: []};
      return newState;
=======
const FutonsReducer = function(state = {}, action){
  switch(action.type){
    case FutonConstants.RECEIVE_FUTONS:
      return action.futons;
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
    case FutonConstants.RECEIVE_FUTON:
      const futon = {[action.futon.id]: action.futon};
      return merge({}, state, futon);
    default:
      return state;
  }
};

export default FutonsReducer;
