
import { applyMiddleware } from 'redux';
import FutonMiddleware from './futon_middleware.js';
import SessionMiddleware from './session_middleware.js';
import UserMiddleware from './user_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FutonMiddleware,
  UserMiddleware
);
export default RootMiddleware;
