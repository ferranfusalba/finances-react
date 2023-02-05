import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializeAccounts } from "../domain/reducers/accountsReducer";

const Accounts = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(initializeAccounts());
  }, [dispatch]);

  return (
    <>
      <p>Accounts</p>
      <ul>
        {accounts.map((account, index) => (
          <div key={index}>
            <li>{account.name}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Accounts;
