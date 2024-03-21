import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import { RegisterContainer } from "./register.style";
import { MainWrapper } from "../../components/MainWrapper.style";
import SignUp from "../../components/SignUp";

export default function Register() {
  const { isSigned } = useContext(UserContext);

  if (isSigned) {
    return <Navigate to="/profile" />;
  }

  return (
    <RegisterContainer>
      <MainWrapper>
        <SignUp />
      </MainWrapper>
    </RegisterContainer>
  );
}
