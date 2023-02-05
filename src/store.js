import { configureStore } from "@reduxjs/toolkit";

import accountsReducer from "./features/Accounts/domain/reducers/accountsReducer";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});

export default store;
