//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import student from './Page/student';
import addstudent from  './Page/addstudent';
import EditStudent from './Page/EditStudent';
import About from './Page/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Page/Navbar';
import Registration from './Page/Registration';
 function App() {
  return (
   
   <Router>
     <div className="App">
       <Navbar />
      
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/student" component={student} />
      <Route path="/add-student" component={addstudent} />
      <Route path="/edit-student/:id" component={EditStudent} /> 
      <Route path="/register" component={Registration} />
    </Switch>
    
    </div>
   </Router>  
  
  );
}

export default App;
