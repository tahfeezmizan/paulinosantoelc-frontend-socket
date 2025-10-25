// eslint-disable-line @typescript-eslint/no-explicit-any
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../store";

interface UserState {
  user: any;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data;
      const accessToken = action.payload.data.accessToken;

      // Save token both in cookies and localStorage (optional)
      if (typeof window !== "undefined" && accessToken) {
        // Set token in Cookies (expires in 7 days)
        Cookies.set("accessToken", accessToken, {
          expires: 7, // days
          secure: process.env.NODE_ENV === "production", // only over HTTPS
          sameSite: "strict",
        });

        // Optional: also store in localStorage
        localStorage.setItem("accessToken", accessToken);
      }
    },

    removeUser: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        // Remove from localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("email");

        // Remove from Cookies
        Cookies.remove("accessToken");
      }
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectIsLoggedIn = (state: RootState) => !!state.user.user;

export default userSlice.reducer;
