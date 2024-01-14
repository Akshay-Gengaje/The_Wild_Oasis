import React, { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100dvh;
  width: 100dvw;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProtectedRoutes = ({ children }) => {
  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  // 2. If there is No authenticated user then return to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While Loading, Load the spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, render the app
  return children;
};

export default ProtectedRoutes;
