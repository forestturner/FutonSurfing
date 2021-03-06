import { fetchFutons,fetchFuton,fetchOwner,updateFuton,createFuton} from '../util/futon_util';
// Futon Action
import { requestFutons,receiveFuton,receiveFutons,FutonConstants} from '../actions/futon_actions';
import{FilterConstants} from '../actions/filter_actions';

export default ({getState, dispatch}) => next => action => {
  const futonsSuccess = data => dispatch(receiveFutons(data));
  const futonSuccess = data => dispatch(receiveFuton(data));
  const ownerSuccess = data => dispatch(receiveOwner(data));
  switch(action.type){
    case FutonConstants.REQUEST_FUTONS:
      // success = (sites) => dispatch(receiveFutons(sites));
      // error = (errors) => dispatch(receiveSiteErrors(errors));
      let filters = getState().filters;
      fetchFutons(filters, futonsSuccess);
      return next(action);
    case FutonConstants.REQUEST_FUTON:
      fetchFuton(action.id, futonSuccess);
      return next(action);
    case FutonConstants.REQUEST_OWNER:
      fetchOwner(action.id, ownerSuccess);
      return next(action);
    case FutonConstants.CREATE_FUTON:
      createFuton(action.futon, futonSuccess);
      return next(action);
    case FutonConstants.UPDATE_FUTON:
      updateFuton(action.id,action.futon,futonSuccess)
    return next(action);
    case FilterConstants.UPDATE_FILTER:
      dispatch(requestFutons());
      return next(action);
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestFutons());
      break;
    default:
      return next(action);
  }
};








// case FilterConstants.UPDATE_FILTER:
//   dispatch(requestFutons());
//   break;
