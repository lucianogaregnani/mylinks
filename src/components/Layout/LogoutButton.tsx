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
      <div className="h-[2.7rem] w-[2.7rem] border-slate-200 bg-cyan-500 rounded-full overflow-hidden">
        <img
          className="h-full w-full"
          src={currentUser?.photoURL || profileIcon}
          alt="Profile picture"
        />
      </div>
    </div>
  );
}

export default LogoutButton;
