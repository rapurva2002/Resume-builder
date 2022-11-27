import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const EditProfile = () => {
  return (
    <div>
      <br/>
    <section className="signup">
        <hr/>
        <br/>
        <div className="container-md">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Profile</h2><hr/>
                    <form>
                    <div className="mb-3 row">
                        <label htmlFor="UserName" className="col-sm-2 col-form-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input" placeholder="User Name"/>
                        </div>  
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input" placeholder="email@example.com"/>
                        </div>  
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="FirstName" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input" placeholder="First Name"/>
                        </div>  
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="LastName" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="input" placeholder="Last Name"/>
                        </div>  
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="PNo" className="col-sm-2 col-form-label">Phone No.</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="input" placeholder="Phone No."/>
                        </div>  
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div><br/>
                    <div className="mb-3 row">
                        <label htmlFor="COnfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="ConfirmPassword" placeholder="Confirm Password"/>
                        </div>
                    </div><br/>
                    <div className="form-group form-button">
                      <input type="submit" name="Register" id="Register" className="form-submit btn btn-primary mb-3" value="Register"/>
                      </div>
                    
                    </form>
                </div>
            </div>
            <br/><br/>
            <p>Already have an account? </p>
            <NavLink to="/Login">Login</NavLink>
        </div>
    </section>
        
    </div>
  )
}

export default EditProfile
