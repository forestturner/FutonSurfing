import {combineReducers} from 'redux';
import FutonsReducer from './futon_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './user_reducer.js'

export default combineReducers({
  futons: FutonsReducer,
  session: SessionReducer,
  users: UsersReducer
});
