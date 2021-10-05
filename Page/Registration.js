import React, { Component } from 'react'
class Registration extends Component
{
    render(){
        return(
          <div className="container">
              <h1 align="center" className="text-success">Registration Here</h1>
                <div className="row-md-5">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="text" name="Uname" placeholder="Enter your Username" autoComplete="off"  className="form-control"/><br/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Enter your Password" autoComplete="off"  className="form-control"/><br/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="course" placeholder="Enter your Course" autoComplete="off"  className="form-control"/><br/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="address" placeholder="Enter your Address" autoComplete="off"  className="form-control"/><br/>
                            </div>
                        </form>
                    </div>
                </div>
          </div>
        );
    }
}
export default Registration;