import React , { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.module.css";
import {NavLink, useHistory} from "react-router-dom";
import profilepic from "../../assets/profile.png";

const Profile = () => {
    
    const history = useHistory();
    //const [userData, setUserData] = useState();
      const callProfilePage = async()=> {
        try{
            const res = await fetch('/profile',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            //setUserData(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
            
        } catch(err){
            console.log(err);
            history.push('/Login');
        }
    }

    useEffect(()=>{
        callProfilePage();
    },[]);
  return (
    <>
    <br/>
    <center>
        <div className="container-emp-profile" id="div1">
            <form method="GET">
                <div className="row">
                    <div className="col-md-4">
                        <img src={profilepic} alt="Profile" />
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Sample Name</h5>
                            <h6>Job Title</h6>

                            <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" 
                            id="details-tab" 
                            data-mdb-toggle="tab" 
                            aria-controls="details" 
                            aria-selected="true" 
                            href="#details" 
                            role="tab">
                            Personal Details</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link active" 
                            id="social-tab" 
                            data-toggle="tab" 
                            aria-controls="socials" 
                            aria-selected="false" 
                            href="#socials" 
                            role="tab">
                            Social Media</a>
                        </li>
                        
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        
                        <NavLink to="/EditProfile">Edit Profile</NavLink>
                    </div>

                    <div className="row">
                        {/*left side */}
                        <div className="col-md-4">
                            <div className='="profile-work'>
                              <p> Work Links</p>  
                            </div> 
                        </div>

                        {/*right side data toggle*/}

                        
                        <div className="col-md-8 pl-5 Details">
                            <div className="tab-content details" id="details">
                                <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details"></div>
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
                        <div className="col-md-8 pl-5 Socials">
                            <div className="tab-content socials" id="socials">
                                <div className="tab-pane fade" id="socials" role="tabpanel" aria-labelledby="socials"></div>
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

export default Profile
