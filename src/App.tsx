import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Data from "./features/Data/pages/Data";
import Budget from "./features/Budget/pages/Budget";
import Settings from "./features/Settings/pages/Settings";
import Accounts from "./features/Accounts/pages/Accounts";
import AccountsMenu from "./features/Accounts/pages/AccountsMenu"
import Account from "./features/Accounts/pages/Account"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeUsers } from "./features/core/domain/reducers/coreReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/accounts" element={<AccountsMenu />}>
            <Route index element={<Accounts />} />
            <Route path=":id" element={<Account />} />
          </Route>
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/budget">Budget</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
