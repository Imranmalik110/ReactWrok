import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class EditStudent extends Component
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
async componentDidMount()
{
    const stud_id= this.props.match.params.id;
    console.log(stud_id);
    const res= await axios.get(`http://127.0.0.1:8000/api/edit-student/${stud_id}`);
    if(res.data.status===200)
    {
        this.setState({
            name: res.data.student.name,
            course: res.data.student.course,
            email: res.data.student.email,
            phone: res.data.student.phone,
        });
    }
    
}

updateStudent = async(e) =>{
    e.preventDefault();
    const stud_id= this.props.match.params.id;
    const  res = await axios.put(`http://127.0.0.1:8000/api/update-student/${stud_id}`,this.state);
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
                            <h4>Update Student
                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                          <form onSubmit={this.updateStudent}>
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
                                  <button type="submit" className="btn btn-success form-control">Update Data</button>
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
export default EditStudent;