import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
  }

  return <Outlet />;
}

export default ProtectedRoute;
