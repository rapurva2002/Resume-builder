import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <br/>
      <nav className="bg-light">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item"><h1>Resume<i id="i1">Plus+</i></h1></li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Register">Create Template</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Register">Jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Register">Contact Us</NavLink>
        </li>
        <li>
      
      <button className="btn btn-outline-info" type="submit">
        <NavLink className="nav-link" to="/Login" ><b>Login</b></NavLink>
        </button>
      
    </li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
