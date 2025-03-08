import { initializeApp } from "firebase/app";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthRoute from "./components/AuthRoute";
import { firebaseConfig } from "./config";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";

initializeApp(firebaseConfig);

export default function App() {
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
}
