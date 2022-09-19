import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { HomeContext } from "../context/HomeContex";
import { ClinicaPage } from "../pages/clinicaPage";
import EmailChecker from "../pages/emailVerific";
import { HomePage } from "../pages/home";
import { Login } from "../pages/login";
import { RegisterClient } from "../pages/register/registerClient/registClient";

export default function RoutesMain() {
    return (
      <Routes>
        <Route path="/" element={<HomeContext><HomePage/></HomeContext>} />
        <Route path="/login" element={<AuthContext><Login/></AuthContext>} />
        <Route path="/register" element={<AuthContext><RegisterClient/></AuthContext>} />
        <Route path="/clinica/:id" element={<ClinicaPage/>} />
        <Route
				path='/emailChecker/:tokenEmail'
				element={<AuthContext><EmailChecker /></AuthContext>}
			/>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    );
  }