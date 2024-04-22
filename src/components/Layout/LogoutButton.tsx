import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../Button/Button";
import profileIcon from "../../assets/profile_icon.png";

function LogoutButton() {
  const { signOutUser, currentUser } = useAuth();

  return (
    <div className="flex gap-3">
      <Button color="secondary" size="medium" onClick={signOutUser}>
        Sign Out
      </Button>
      <Link
        to="/admin/profile"
        className="h-[2.7rem] w-[2.7rem] border-slate-200 bg-cyan-500 rounded-full overflow-hidden"
      >
        <img src={currentUser?.photoURL || profileIcon} alt="Profile picture" />
      </Link>
    </div>
  );
}

export default LogoutButton;
