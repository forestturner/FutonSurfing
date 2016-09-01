
import { applyMiddleware } from 'redux';
import FutonMiddleware from './futon_middleware.js';
import SessionMiddleware from './session_middleware.js';
const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FutonMiddleware
);
export default RootMiddleware;
