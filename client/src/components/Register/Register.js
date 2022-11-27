import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./Register.module.css";
import {NavLink, useHistory} from "react-router-dom";

const Register = () => {
    const history = useHistory();
    const [user, setUser ] = useState({
    uname:"", email: "", fname:"", lname:"", pno: "", password: "", cpassword:""
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

        const {uname, email, fname, lname, pno, password, cpassword } = user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                uname, email, fname, lname, pno, password, cpassword 
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
    <section className="signup">
        <hr/>
        <br/>
        <div className="container-md">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign Up</h2><hr/>
                    <form method="POST" className="registration-form" id="registration-form">
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
                        <label htmlFor="pno" className="col-sm-2 col-form-label">Phone No.</label>
                        <div className="col-sm-10">
                            <input type="number" name="pno" className="form-control" id="pno" autocomplete="off" value={user.pno}
                            onChange={handleInputs}
                            placeholder="Phone No."/>
                         </div>  
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="inputPassword" autocomplete="off" value={user.password}
                        onChange={handleInputs}
                        placeholder="Password"/>
                         </div>
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="cpassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                        <input type="password" name="cpassword" className="form-control" id="ConfirmPassword" autocomplete="off" value={user.cpassword}
                        onChange={handleInputs}
                        placeholder="Confirm Password"/>
                        </div>
                    </div><br/>
                    <div className="form-group form-button">
                      <input type="submit" name="Register" id="Register" className="form-submit btn btn-primary mb-3"
                       value="Register" onClick={PostData}/>
                      
                      </div>
                    
                    </form>
                </div>
            </div>
            <br/><br/>
            <p>Already have an account? </p>
            <NavLink to="/Login">Login</NavLink>
        </div>
    </section>
        
    </>
  )
}

export default Register
