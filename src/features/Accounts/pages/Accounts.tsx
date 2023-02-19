import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeAccounts } from "../domain/reducers/accountsReducer";
import styled from "styled-components";

const StyledAccountsMenu = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 0;
  -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
`;

const StyledAccountButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const AccountsList = () => {
  const list = [
    {
      name: "a1",
      title: "Account 1",
    },
    {
      name: "a2",
      title: "Account 2",
    },
    {
      name: "a3",
      title: "Account 3",
    },
    {
      name: "a4",
      title: "Account 4",
    },
    {
      name: "a5",
      title: "Account 5",
    },
  ];
  return (
    <>
        <StyledAccountsMenu>
          {list.map(
            (account: { name: string; title: string }, index: number) => (
              <div key={index}>
                <StyledAccountButton>
                  {account.title}
                </StyledAccountButton>
              </div>
            )
          )}
        </StyledAccountsMenu>
    </>
  );
};

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
      <AccountsList />
    </>
  );
};

export default Accounts;
