import { createSlice } from "@reduxjs/toolkit";
import accountService from "../services/accountsService";

const accountSlice = createSlice({
  name: "accounts",
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const id = action.payload;
      const accountToChange = state.find((n) => n.id === id);
      const changedAccount = {
        ...accountToChange,
        important: !accountToChange.important,
      };
      return state.map((account) => (account.id !== id ? account : changedAccount));
    },
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

export const { toggleImportanceOf, appendAccount, setAccounts } = accountSlice.actions;
export default accountSlice.reducer;
