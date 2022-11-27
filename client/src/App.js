import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarLog from "./components/Navbar/NavbarLog";
import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Survey from "./components/Survey/Survey";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Builder from "./components/Builder/Builder";
import Resume from "./components/Builder/Resume";
import Template from "./components/Template/Template";
import "./App.css";
const App = () => {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
      <Navbar/>
      <Landing/>
    </Route>

    <Route exact path="/Home">
      <NavbarLog/>
      <Home/>
    </Route>

    <Route exact path="/Profile">
      <NavbarLog/>
      <Profile/>
    </Route>

    <Route exact path="/Survey">
      <NavbarLog/>
      <Survey/>
    </Route>

    <Route exact path="/Login">
      <Navbar/>
      <Login/>
    </Route>

    <Route exact path="/Register">
      <Navbar/>
      <Register/>
    </Route>

    <Route exact path="/builder">
      <NavbarLog/>
      <Builder/>
    </Route>

    <Route exact path="/Resume">
      <NavbarLog/>
      <Resume/>
    </Route>

    <Route exact path="Template">
      <NavbarLog/>
      <Template/>
    </Route>

    </Switch>
  </Router>   
  </>
  )
}

export default App

