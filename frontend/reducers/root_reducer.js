import {combineReducers} from 'redux';
import FutonsReducer from './futon_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
  futons: FutonsReducer,
  session: SessionReducer
});
