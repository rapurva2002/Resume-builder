import React, {useState} from 'react'
import {NavLink, useHistory} from "react-router-dom";


const Login = () => {

    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const loginUser = async (e)=>{
        e.preventDefault();
        
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });

        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials!");
            console.log("Invalid Credentials!");
        }
        else{
            window.alert("Login Successful!");
            console.log("Login Successful!");
            history.push("/Home");
        }
    }

  return (
    <>
    <br/>
    <section className="Login">
        <hr/>
        <br/>
        <div className="container-md">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign Up</h2><hr/>
                    <form method="POST" className="Login-form" id="Login-form" >
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" name="email" autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             placeholder="email@example.com"/>
                        </div>  
                    </div><br/>
                    <br/>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         placeholder="Password"/>
                        </div>
                    </div><br/>
                    <div className="col-auto">
                    <div className="form-group form-button">
                      <input type="submit" name="Login" id="Login" className="form-submit btn btn-primary mb-3" 
                      onClick={loginUser}
                      value="Login"/>
                      </div>
                    </div>
                    </form>
                </div>
            </div><br/><br/>
            <p>Don't have an account? </p>
    <NavLink to="/register">Register Here</NavLink>
        </div>
    </section>
    
     </>   
  )
}

export default Login
