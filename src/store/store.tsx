import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import addToCartReducer from './Slices/sliceCart';
import authReducer from './Slices/authSlice';

const rootReducer = combineReducers({
  addToCart: addToCartReducer,
  auth: authReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
