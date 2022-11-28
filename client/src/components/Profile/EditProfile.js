import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.module.css";
import {NavLink, useHistory} from "react-router-dom";

const EditProfile = () => {
    const history = useHistory();
    const [user, setUser ] = useState({
        uname: "", email: "", fname: "", lname: "", contact: "", Address: "", LinkedIn: "", GitHub: "", Instagram: "",Facebook:""
    });

    let name, value;

    const handleInputs=(e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async(e) => {
        e.preventDefault();

        const {uname, email, fname, lname, contact, Address, LinkedIn, GitHub, Instagram,Facebook} = user;
        const res = await fetch("/editprofile",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                uname, email, fname, lname, contact, Address, LinkedIn, GitHub, Instagram,Facebook
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else{
            window.alert("Successful Registration");
            console.log("Successful Registration");

            history.push("/login");
        }
    }

  return (
    <>
    <br/>
    <section className="profile">
        <hr/>
        <br/>
        <div className="container-md">
            <div className="profile-content">
                <div className="profile-form">
                    <h2 className="form-title">profile</h2><hr/>
                    <form method="POST" className="profile-form" id="profile-form">
                        <div className="mb-3 row">
                            <label htmlFor="uname" className="col-sm-2 col-form-label">User Name</label>
                            <div className="col-sm-10">
                                <input type="text" name="uname" className="form-control" id="uname" autocomplete="off" value={user.uname}
                                onChange={handleInputs}
                                placeholder="User Name"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" name="email" className="form-control" id="email" autocomplete="off" value={user.email}
                                onChange={handleInputs}
                                placeholder="email@example.com"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="fname" className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text" name="fname" className="form-control" id="fname" autocomplete="off" value={user.fname}
                                onChange={handleInputs}
                                placeholder="First Name"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="lname" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text" name="lname" className="form-control" id="lname" autocomplete="off" value={user.lname}
                                onChange={handleInputs}
                                placeholder="Last Name"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="contact" className="col-sm-2 col-form-label">Contact</label>
                            <div className="col-sm-10">
                                <input type="number" name="contact" className="form-control" id="contact" autocomplete="off" value={user.contact}
                                onChange={handleInputs}
                                placeholder="Contact No."/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="Address" className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input type="text" name="Address" className="form-control" id="Address" autocomplete="off" value={user.Address}
                                onChange={handleInputs}
                                placeholder="Address"/>
                            </div>  
                        </div><br/><br/>
                        <h2>Social Media</h2>
                        <hr/><br/>
                        <div className="mb-3 row">
                            <label htmlFor="LinkedIn" className="col-sm-2 col-form-label">LinkedIn</label>
                            <div className="col-sm-10">
                                <input type="text" name="Address" className="form-control" id="LinkedIn" autocomplete="off" value={user.LinkedIn}
                                onChange={handleInputs}
                                placeholder="LinkedIn Link"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="GitHub" className="col-sm-2 col-form-label">GitHub</label>
                            <div className="col-sm-10">
                                <input type="text" name="GitHub" className="form-control" id="GitHub" autocomplete="off" value={user.GitHub}
                                onChange={handleInputs}
                                placeholder="GitHub Link"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="Instagram" className="col-sm-2 col-form-label">Instagram</label>
                            <div className="col-sm-10">
                                <input type="text" name="Address" className="form-control" id="Instagram" autocomplete="off" value={user.Instagram}
                                onChange={handleInputs}
                                placeholder="Instagram Link"/>
                            </div>  
                        </div><br/>
                        <div className="mb-3 row">
                            <label htmlFor="Facebook" className="col-sm-2 col-form-label">Facebook</label>
                            <div className="col-sm-10">
                                <input type="text" name="Address" className="form-control" id="Facebook" autocomplete="off" value={user.Facebook}
                                onChange={handleInputs}
                                placeholder="Facebook Link"/>
                            </div>  
                        </div><br/>

                        <div className="form-group form-button">
                        <input type="submit" name="Submit" id="Submit" className="form-submit btn btn-primary mb-3"
                        value="Submit" onClick={PostData}/>
                        
                        </div>
                    
                    </form>
                </div>
            </div>
            <br/><br/>
        </div>
    </section>
        
    </>
  )
}

export default EditProfile
