import { createSlice } from "@reduxjs/toolkit";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils.js";
const initialState: any = {
  currentUser: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload) {
        createUserDocumentFromAuth(JSON.parse(action.payload));
        state.currentUser = {
          ...state.currentUser,
          ...JSON.parse(action.payload),
        };
        // state.push(1);
      }
    },
    logout(state) {
      signOutUser();
      state.currentUser = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
