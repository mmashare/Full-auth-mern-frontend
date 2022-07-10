import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  name: "",
  email: "",
  token: "",
  password: "",
};

const authdata = createSlice({
  name: "authdata",
  initialState: initialSlice,
  reducers: {
    // ye singin route ke liye hai
    userdata: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.password = action.payload.password;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: null,
          email:null,
          token: null,
        })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          email : action.payload.email,
          token: action.payload.token,
        })
      );
    },
    // ye login route ke liye hai
    userLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.password = action.payload.password;
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: null,
          token: null,
          email:null,
        })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
          email: action.payload.email,
        })
      );
    },
    // ye logout ke liye hai
    logOutdata: (state, action) => {
      state.name = null;
      state.email = null;
      state.token = null;
      state.password = null;
      localStorage.clear();
    },
  },
});

export const { userdata, logOutdata, userLogin } = authdata.actions;
export default authdata.reducer;
