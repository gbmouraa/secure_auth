import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";
import Loader from "../components/Loader";

export default function Private({ children }) {
  const { isSigned, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-box">
          <Loader />
        </div>
      </div>
    );
  }

  if (!isSigned) {
    return <Navigate to="/" />;
  }

  return children;
}
