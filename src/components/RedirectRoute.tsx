import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RedirectRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default RedirectRoute;
