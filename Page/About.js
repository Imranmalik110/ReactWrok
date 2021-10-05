import React, {Component } from 'react';
import Logo from '../Images/Login2.jpg';
class About extends Component
{
    render()
    {
        return(
            <div className="container">
                <h1 align="center" className="text-success">About the Summmary</h1><br/>
                <img src={Logo} width="800" height="500" alt="" />
                <p >
                Alia Advani (born 31 July 1992), known professionally as Kiara Advani ([kɪˈjaːra əɽˈʋaːɳi]), is an Indian actress who predominantly works in Hindi films. After making her debut in Fugly (2014), she played the real-life character of Sakshi Rawat, a hotel manager and cricketer M. S. Dhoni's wife, in Neeraj Pandey's critically and commercially successful sports biopic M. S. Dhoni: The Untold Story (2016). 
                </p>
            </div>
        );
    }
}
export default About;