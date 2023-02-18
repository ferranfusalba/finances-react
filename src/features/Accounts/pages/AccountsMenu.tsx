import { useSelector } from "react-redux";
import { Account } from "../../../types/Account";
import { State } from "../../../types/State";
import { Link, Outlet } from "react-router-dom";

const AccountsMenu = () => {
  const accounts = useSelector((state: State) => state.accounts);

  console.log("accounts", accounts);

  return (
    <>
      <ul>
        {accounts.map((account: Account, index: number) => (
          <div key={index}>
            <li>
              <Link to={`/accounts/${account.name}`}>{account.title}</Link>
            </li>
          </div>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default AccountsMenu;
