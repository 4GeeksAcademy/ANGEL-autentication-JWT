import React from "react";
import "../../styles/home.css";
import SignUp from "../views/Signup.jsx";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "../views/Login.jsx";

export const Home = () => {

	return (
		<Routes>
      <Route path="/" element={<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
	);
};
