import { fetchFutons,fetchFuton,fetchOwner,updateFuton} from '../util/futon_util';
// Futon Action
import { requestFutons,receiveFuton,receiveFutons,FutonConstants} from '../actions/futon_actions';
import{FilterConstants} from '../actions/filter_actions';

export default ({getState, dispatch}) => next => action => {
  const futonsSuccess = data => dispatch(receiveFutons(data));
  const futonSuccess = data => dispatch(receiveFuton(data));
  const ownerSuccess = data => dispatch(receiveOwner(data));
  const result = next(action);
  switch(action.type){
    case FutonConstants.REQUEST_FUTONS:
      const filters = getState().filters;
      fetchFutons(filters, futonSuccess);
      break;
    case FutonConstants.REQUEST_FUTON:
      fetchFuton(action.id, futonSuccess);
      break;
    case FutonConstants.REQUEST_OWNER:
      fetchOwner(action.id, ownerSuccess);
      break;
    case FutonConstants.CREATE_FUTON:
      createFuton(action.futon, futonSuccess);
      break;
    case FutonConstants.UPDATE_FUTON:
      updateFuton(action.id,action.futon,futonSuccess)
      break;
    case FilterConstants.UPDATE_FILTER:
      dispatch(requestFutons());
      break;
    default:
      break;
  }
  return result;
};








// case FilterConstants.UPDATE_FILTER:
//   dispatch(requestFutons());
//   break;
