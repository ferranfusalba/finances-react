import { createSlice } from "@reduxjs/toolkit";
import accountService from "../services/accountsService";

const accountSlice = createSlice({
  name: "accounts",
  initialState: [],
  reducers: {
    appendAccount(state, action) {
      state.push(action.payload);
    },
    setAccounts(state, action) {
      return action.payload;
    },
  },
});

// TODO: Replace any
export const initializeAccounts = (): any => {
  return async (dispatch) => {
    const accounts = await accountService.getAll();
    dispatch(setAccounts(accounts));
  };
};

export const createAccount = (content) => {
  return async (dispatch) => {
    const newAccount = await accountService.createNew(content);
    dispatch(appendAccount(newAccount));
  };
};

export const { appendAccount, setAccounts } = accountSlice.actions;
export default accountSlice.reducer;
