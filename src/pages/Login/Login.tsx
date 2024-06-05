import { Navigate } from "react-router-dom";
import Form from "../../components/Form";
import useAuth from "../../hooks/useAuth";

function Login() {
  const { currentUser, authLoadingStatus } = useAuth();

  if (authLoadingStatus) return <p>Cargando...</p>;

  return (
    <>
      {currentUser ? (
        <Navigate to="/admin/links" />
      ) : (
        <section>
          <Form type="login" />
        </section>
      )}
    </>
  );
}

export default Login;
