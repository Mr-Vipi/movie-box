import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";

export interface IAuthPageProps {}

const AuthPage: React.FunctionComponent<IAuthPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  return (
    <div>
      <SignUp />
    </div>
  );
};

export default AuthPage;
