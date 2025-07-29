import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthRegister';

export const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
});
