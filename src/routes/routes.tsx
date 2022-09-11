import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Login } from "../pages/login";
import { RegisterClient } from "../pages/register/registerClient/registClient";

export default function RoutesMain() {
    return (
      <Routes>
        <Route path="/login" element={<AuthContext><Login/></AuthContext>} />
        <Route path="/register" element={<AuthContext><RegisterClient/></AuthContext>} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    );
  }