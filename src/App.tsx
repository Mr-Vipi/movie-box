import { initializeApp } from "firebase/app";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { config } from "./config/config";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

initializeApp(config.firebaseConfig);

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
