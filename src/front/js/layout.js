import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import SignUp from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import Private from "./views/Private.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";


    return (
        <main className="main">
            <BrowserRouter basename={basename}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/signup"/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/private" element={<PrivateRoute><Private/></PrivateRoute>}/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
            </BrowserRouter>
        </main>
    );
};

export default (Layout);
