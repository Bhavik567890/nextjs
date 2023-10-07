import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/authSlice";
import postReducer from './modules/post/postSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
