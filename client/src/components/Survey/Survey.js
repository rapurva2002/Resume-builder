import React , { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Survey.module.css";
import {NavLink} from "react-router-dom";
import profilepic from "../../assets/profile.png";

const Survey = () => {
  return (
    <>
      <br/>
    <center>
        <div className="container-emp-survey" id="div1">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <img src={profilepic} alt="Survey" />
                    </div>
                    <div className="col-md-6">
                        <div className="survey-head">
                            <h5>Sample Name</h5>
                            <h6>Job Title</h6>

                            <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" 
                            id="exp-tab" 
                            data-mdb-toggle="tab" 
                            aria-controls="exp" 
                            aria-selected="true" 
                            href="#exp" 
                            role="tab">
                            Past Experience</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link active" 
                            id="qual-tab" 
                            data-toggle="tab" 
                            aria-controls="qual" 
                            aria-selected="false" 
                            href="#qual" 
                            role="tab">
                            Qualification</a>
                        </li>
                        
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <NavLink to="\Edit Survey"> Edit Survey</NavLink>
                    </div>

                    <div className="row">
                        {/*left side */}
                        <div className="col-md-4">
                            <div className='="profile-work'>
                              <p> Work Links</p>  
                            </div> 
                        </div>

                        {/*right side data toggle*/}

                        
                        <div className="col-md-8 pl-5 exp">
                            <div className="tab-content exp" id="exp">
                                <div className="tab-pane fade show active" id="exp" role="tabpanel" aria-labelledby="exp"></div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User ID">User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User Name">User Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="First Name">First Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Last Name">Last Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Email">Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Contact">Contact</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Address">Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                    </div>
                            </div>
                            
                        </div> 
                        <div className="col-md-8 pl-5 qual">
                            <div className="tab-content qual" id="qual">
                                <div className="tab-pane fade" id="qual" role="tabpanel" aria-labelledby="qual"></div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User ID">User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="User Name">User Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="First Name">First Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Last Name">Last Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Email">Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Contact">Contact</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="Address">Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>ID</p>
                                        </div>
                                    </div>
                            </div>
                            
                        </div>


                        
                    </div>
                </div>

            </form>

        </div>
    </center>
    </>
  )
}

export default Survey
