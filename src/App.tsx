import { initializeApp } from "firebase/app";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { firebaseConfig } from "./config";
import AuthPage from "./pages/Auth";
import MainPage from "./pages/Main";

initializeApp(firebaseConfig);
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route
          path="/main"
          element={
            <AuthRoute>
              <MainPage />
            </AuthRoute>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
