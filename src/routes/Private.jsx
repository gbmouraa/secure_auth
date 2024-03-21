import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Private({ children }) {
  const { isSigned, loading } = useContext(UserContext);

  if (loading) {
    return <div></div>;
  }

  if (!isSigned) {
    return <Navigate to="/" />;
  }

  return children;
}
