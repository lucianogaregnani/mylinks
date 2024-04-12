import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuth = true;
  return !isAuth ? <Navigate to="/login" /> : <Outlet />;
}

export default ProtectedRoute;
