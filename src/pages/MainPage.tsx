import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Characters from "../components/Characters";

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = () => {
  const auth = getAuth();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
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
};

export default MainPage;
