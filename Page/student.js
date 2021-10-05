import axios from 'axios';
import React, {Component } from 'react';
import {Link} from 'react-router-dom';

class Student extends Component
{
    state = {
        students:[],
        loading:true,
    }
    async componentDidMount()
    {
        const res = await axios.get('http://127.0.0.1:8000/api/students');
       // console.log(res);
       if(res.data.status===200)
       {
           this.setState({
               students:res.data.students,
               loading:false,
           });
       }
    }
    deleteStudent =  async(e,id)=>
    {
        const thisclickFunda = e.currentTarget;
        thisclickFunda.innerText = "Deleting";
        const res =await axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}`);
        if(res.data.status===200)
        {
            thisclickFunda.closest("tr").remove();
            console.log(res.data.message);
        }
    }

    render(){
        var student_HTML_TABLE="";
        if(this.state.loading)
        {
            student_HTML_TABLE = <tr><td colSpan="7"><h2>loading..</h2></td></tr>
        }
        else
        {
            student_HTML_TABLE =
            this.state.students.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm">Update</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e)=>this.deleteStudent(e,item.id)}  className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }
        return(
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-12">
                       <div className="card">
                       <div className="card-header">
                            <h4>Add Student
                                <Link to={'add-student'} className="btn-primary btn-sm float-end">Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Student Name</th>
                                    <th>Course</th>
                                    <th>Email Id</th>
                                    <th>Phone Number</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student_HTML_TABLE}
                            </tbody>
                            </table>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Student;