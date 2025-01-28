import { BrowserRouter, Routes, Route } from "react-router";

import Header from "../components/Header";

import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "../pages/Auth/SignuPage";
function PrimaryRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default PrimaryRouter;
