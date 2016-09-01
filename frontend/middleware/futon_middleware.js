import { fetchFutons,fetchFuton} from '../util/futon_util';
// Futon Action
import { requestFutons,receiveFuton,receiveFutons,FutonConstants} from '../actions/futon_actions';


export default ({getState, dispatch}) => next => action => {
  const futonesSuccess = data => dispatch(receiveFutons(data));
  const futonSuccess = data => dispatch(receiveFuton(data));
  const result = next(action);
  switch(action.type){
    case FutonConstants.REQUEST_FUTONS:
      fetchFutons(futonesSuccess);
      break;
    case FutonConstants.REQUEST_FUTON:
      fetchFuton(action.id, futonSuccess);
      break;
    case FutonConstants.CREATE_FUTON:
      createFuton(action.futon, futonSuccess);
      break;
    default:
      break;
  }
  return result;
};








// case FilterConstants.UPDATE_FILTER:
//   dispatch(requestFutons());
//   break;
