import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
  const { currentUser } = useAuth();

  return !currentUser ? <Navigate to="/login" /> : <Outlet />;
}

export default ProtectedRoute;
