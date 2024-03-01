import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

// Prevents unauthorised access to dashboard.
// E.g when user puts in "/dashboard" in the URL.
export default function RequireAuth({ children }) {
  const token = useContext(AuthContext).token;

  //If token is falsy/null, then go to login page.
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  //If token has a value, then go to dashboard.
  return children;
}
