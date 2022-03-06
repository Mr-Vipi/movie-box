import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React from "react";

interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
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
    <div>
      <p>Main Page (Protected by Firebase!)</p>
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default MainPage;
