import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../authContext";
import { RegisterContainer } from "./register.style";
import { MainWrapper } from "../../components/MainWrapper.style";
import SignUp from "../../components/SignUp";

export default function Register() {
  const { isSigned } = useContext(AuthContext);

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
