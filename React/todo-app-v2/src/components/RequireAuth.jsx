import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const userToken = useSelector((state) => state.user.userToken);

  // If no token, navigate back to login page
  if (!userToken) {
    return <Navigate to="/" />;
  }

  // If have token, can proceed to access the relevant pages
  return children;
}
