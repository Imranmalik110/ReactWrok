import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Navbar extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">  
            
            <NavLink className="navbar-brand"  exact to="/">CodeSmasher</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact to="/student" className="nav-link" >Student</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" className="nav-link" >about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/register" className="nav-link" >Register</NavLink>
                    </li>
               </ul>
        </div>
            </div>
          </nav>
        );
    }
}
export default Navbar;
