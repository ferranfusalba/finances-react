import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeAccounts } from "../domain/reducers/accountsReducer";
import { Account } from "../../../types/Account";
import { State } from "../../../types/State";

const Accounts = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state: State) => state.accounts);

  useEffect(() => {
    dispatch(initializeAccounts());
    return () => {
      console.log("Component unmounted");
    };
  }, [dispatch]);

  return (
    <>
      <p>Accounts</p>
      <ul>
        {accounts.map((account: Account, index: number) => (
          <div key={index}>
            <li>{account.name}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Accounts;
