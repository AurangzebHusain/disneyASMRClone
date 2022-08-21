import { createSlice } from "@reduxjs/toolkit";
import { User, UserCredential } from "firebase/auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils.js";
const initialState: { currentUser?: User | null } = {
  currentUser:
    window.localStorage.getItem("User") != null
      ? JSON.parse(window.localStorage.getItem("User") ?? "")
      : null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload) {
        window.localStorage.setItem("User", action.payload);
        createUserDocumentFromAuth(JSON.parse(action.payload));
        state.currentUser = {
          ...state.currentUser,
          ...JSON.parse(action.payload),
        };
        // state.push(1);
      }
    },
    logout(state) {
      window.localStorage.removeItem("User");
      signOutUser();

      state.currentUser = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
