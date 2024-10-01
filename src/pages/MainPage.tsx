import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import Characters from "../components/Characters";

export default function MainPage() {
  const auth = getAuth();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  return (
    <>
      <Characters />
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Out
      </Button>
    </>
  );
}
