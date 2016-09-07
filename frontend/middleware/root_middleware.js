
import { applyMiddleware } from 'redux';
import FutonMiddleware from './futon_middleware.js';
import SessionMiddleware from './session_middleware.js';
import UserMiddleware from './user_middleware.js';
import logger from 'redux-logger';
import BookingMiddleware from './booking_middleware';

const RootMiddleware = applyMiddleware(
  logger,
  SessionMiddleware,
  FutonMiddleware,
  BookingMiddleware,
  UserMiddleware
);
export default RootMiddleware;
