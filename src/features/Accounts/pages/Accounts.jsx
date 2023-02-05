import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeAccounts } from "../domain/reducers/accountsReducer";

const Accounts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAccounts());
  }, [dispatch]);

  return (
    <>
      <p>Accounts (from Component)</p>
    </>
  );
};

export default Accounts;
