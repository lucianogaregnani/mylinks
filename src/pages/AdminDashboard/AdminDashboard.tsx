import useAuth from "../../hooks/useAuth";

function AdminDashboard() {
  const { signOutUser } = useAuth();

  return (
    <div>
      <button onClick={signOutUser}>Sign out</button>
    </div>
  );
}

export default AdminDashboard;
