import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
};

const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    log_in_user: (state, action) => {
      state.user = action.payload;
    },
    log_out_user: (state) => {
      state.user = "";
    },
  },
});

export const { log_in_user, log_out_user } = AuthSlice.actions;
export default AuthSlice.reducer;
