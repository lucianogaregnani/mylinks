import useAuth from "../../hooks/useAuth";
import Button from "../Button/Button";

function LogoutButton() {
  const { signOutUser } = useAuth();

  return (
    <div className="flex gap-3">
      <Button color="secondary" size="medium" onClick={signOutUser}>
        Sign Out
      </Button>
      <button className="h-[2.7rem] w-[2.7rem] hover:border-2 border-slate-200 bg-cyan-500 rounded-full" />
    </div>
  );
}

export default LogoutButton;
