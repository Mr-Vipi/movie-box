import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithEmail = async () => {
    setAuthing(true);
  };

  return (
    <div>
      <p>Login Page</p>
    </div>
  );
};
export default LoginPage;
