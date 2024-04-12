import { Navigate, Outlet } from "react-router-dom";

function RedirectRoute() {
  const isAuth = false;
  return isAuth ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default RedirectRoute;
