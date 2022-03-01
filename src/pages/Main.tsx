import { getAuth } from "firebase/auth";
import React from "react";

export interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const auth = getAuth();

  return (
    <div>
      <p>Main Page (Protected by Firebase!)</p>
    </div>
  );
};

export default MainPage;
