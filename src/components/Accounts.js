import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeNotes } from "../reducers/noteReducer";

const Accounts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <>
      <p>Accounts (from Component)</p>
    </>
  );
};

export default Accounts;
