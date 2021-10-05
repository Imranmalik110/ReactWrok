import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class addstudent extends Component
{
    state = {
        name:'',
        course:'',
        email:'',
        phone:'',
    }
    handleInut = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
saveStudent = async(e) =>{
    e.preventDefault();
    const  res = await axios.post('http://127.0.0.1:8000/api/add-student',this.state);
    if(res.data.status===200)
    {
        console.log(res.data.message);
        this.setState({
            name:'',
            course:'',
            email:'',
            phone:'',
        });
    }
}
    render(){
        return(
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                        <div className="card-header">
                            <h4>Add Student
                                <Link to={'/student'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                          <form onSubmit={this.saveStudent}>
                              <div className="form-group mb-3">
                                  <label>Student Name</label>
                                  <input type="text" name="name" onChange={this.handleInut}  value={this.state.name} className="form-control" autoComplete="off" placeholder="Enter your Name"/>
                              </div>
                              <div className="form-group mb-3">
                                  <label>Student Course</label>
                                  <input type="text" name="course" onChange={this.handleInut} value={this.state.course} className="form-control" autoComplete="off" placeholder="Enter your Course details" />
                              </div>
                              <div className="form-group mb-3">
                                  <label>Student Email</label>
                                  <input type="text" name="email" onChange={this.handleInut} value={this.state.email} className="form-control" autoComplete="off" placeholder="Enter Your Emial ID"/>
                              </div>
                              <div className="form-group mb-3">
                                  <label>Student Phone</label>
                                  <input type="text" name="phone" onChange={this.handleInut} value={this.state.phone} className="form-control" autoComplete="off" placeholder="Enter Your Phone Number" />
                              </div>
                              <div className="form-group mb-3">
                                  <button type="submit" className="btn btn-success form-control">Add Data</button>
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default addstudent;