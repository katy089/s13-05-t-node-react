import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MatchSection from '../pages/MatchSection';

import {
  HOME,
  SIGNUP,
  REGISTER2,
  TERMS,
  PRIVACY,
  PAGESELECTION,
  MATCHSECTION,
  PROFILE,
  REGISTER22,
  REGISTER221
} from "../Router/Paths";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Register2 from "./Register2/Register2";
import Terms from "./Login/Terms";
import Privacy from "./Login/Privacy";
import PageSelection from "./PageSelection/PageSelection";
import Profile from "../pages/Profile";
import Register22 from "./Register22/Register22";
import Register221 from "./Register221/Register221";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/authSlice";

function AppContent() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route
        path={"/"}
        element={!isLoggedIn ? <Login /> : <Navigate to={HOME} replace />}
      />
      <Route path={SIGNUP} element={<SignUp />} />
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTER2} element={<Register2 />} />
      <Route path={TERMS} element={<Terms />} />
      <Route path={PRIVACY} element={<Privacy />} />
      <Route path={PAGESELECTION} element={<PageSelection />} />
      <Route path={PROFILE} element={<Profile />} />
      <Route path={REGISTER22} element={<Register22 />} />
      <Route path={REGISTER221} element={<Register221 />} />
    </Routes>
  );
}

export default AppContent;
