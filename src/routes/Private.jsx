import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authContext";

export default function Private({ children }) {
  const { isSigned, loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  if (!isSigned) {
    return <Navigate to="/" />;
  }

  return children;
}
