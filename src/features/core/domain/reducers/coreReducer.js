import { createSlice } from "@reduxjs/toolkit";
import coreService from "../services/coreService";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    appendUser(state, action) {
      state.push(action.payload);
    },
    setUsers(state, action) {
      return action.payload;
    },
  },
});

// TODO: Replace any
export const initializeUsers = (): any => {
  return async (dispatch) => {
    const users = await coreService.getAll();
    dispatch(setUsers(users));
  };
};

export const createUser = (content) => {
  return async (dispatch) => {
    const newUser = await coreService.createNew(content);
    dispatch(appendUser(newUser));
  };
};

export const { appendUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
