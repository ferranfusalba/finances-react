import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeAccounts } from "../domain/reducers/accountsReducer";

const Accounts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAccounts());
    return () => {
      console.log("Component unmounted");
    };
  }, [dispatch]);

  return (
    <>
      <p>Select an account</p>
    </>
  );
};

export default Accounts;
