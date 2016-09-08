import { applyMiddleware } from 'redux';
import FutonMiddleware from './futon_middleware';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import logger from 'redux-logger';
import BookingMiddleware from './booking_middleware';



const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FutonMiddleware,
  BookingMiddleware,
  UserMiddleware
);
export default RootMiddleware;
