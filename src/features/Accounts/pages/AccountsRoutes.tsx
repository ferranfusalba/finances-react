import { Routes, Route } from "react-router-dom";
import Accounts from "./Accounts";
import Account from "./Account";
import AccountsMenu from "./AccountsMenu";

const AccountsRoutes = () => {
  return (
    <>
      <AccountsMenu />
      <Routes>
        <Route index element={<Accounts />} />
        <Route path=":id" element={<Account />} />
      </Routes>
    </>
  );
};

export default AccountsRoutes;
