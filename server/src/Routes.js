import React from "react";
import Template from "pages/Template";
import Survey from "pages/Survey";
import Profile from "pages/Profile";
import HomePage from "pages/HomePage";
import Registration from "pages/Registration";
import Login from "pages/Login";
import ScreenThree from "pages/ScreenThree";
import ScreenTwo from "pages/ScreenTwo";
import ScreenOne from "pages/ScreenOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/screentwo" element={<ScreenTwo />} />
        <Route path="/screenthree" element={<ScreenThree />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/template" element={<Template />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
