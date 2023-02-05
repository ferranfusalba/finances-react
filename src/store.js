import { configureStore } from "@reduxjs/toolkit";

import accountsReducer from "./features/Accounts/domain/reducers/accountsReducer";
import coreReducer from "./features/core/domain/reducers/coreReducer";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    users: coreReducer,
  },
});

export default store;
