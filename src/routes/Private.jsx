import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authContext";

export default function Private({ children }) {
  const { isSigned } = useContext(AuthContext);

  if (!isSigned) {
    return <Navigate to="/" />;
  }

  return children;
}
