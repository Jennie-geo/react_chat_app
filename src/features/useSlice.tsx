import { createSlice } from "@reduxjs/toolkit";
// import { WritableDraft } from "immer/dist/internal";

interface stateType {
  [key: string]: string | any;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    uid: "",
    displayName: "",
    photoUrl: "",
    user: null,
  },
  reducers: {
    login: (state: stateType, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export const selectUser = (state: any) => state.user.user;
export default userSlice.reducer;
