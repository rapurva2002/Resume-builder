import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.module.css";

const NavbarLog = () => {
  return (
    
      <div>
      <br/>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item"><h1>Resume<i id="i1">Plus+</i></h1></li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Profile">Profile</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink classNameName="nav-link" to="/Survey">Survey</NavLink>
        </li>
        <li className="nav-item">
          <NavLink classNameName="nav-link" to="/Template">Templates</NavLink>
        </li>
        <li className="nav-item">
          <NavLink classNameName="nav-link" to="/resume">Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink classNameName="nav-link" to="/resume">Application</NavLink>
        </li>
        <li>
          <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-primary btn-lg" type="submit">Logout</button>
    </form>
    </li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
      </ul>
      
    </div>
  )
}

export default NavbarLog
