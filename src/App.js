import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Newfile from './Newfile';
// import Oldfile from './Oldfile';
// import Trial from './Trial';
// import Add from './Task1/Add';
import Ageupdown from './Component/Ageupdown';
import Task2 from './Component/Task2';
// import Practise from './Component/Practise';
import Task3 from './Component/Task3';
import Task4 from './Component/Task4';
import Demo from './Component/Demo';
import Demo1 from './Component/Demo1';


function App() {
  return (
    <div>
  <Router>
    <Switch>
    
       {/* <Route exact path='/Newfile' component={Newfile}></Route>
       <Route exact path='/Oldfile' component={Oldfile}></Route>
       <Route exact path='/Trial' component={Trial}></Route> */}
       {/* <Route exact path='/Add' component={Add}></Route>  */}
        <Route exact path='/Ageupdown' component={Ageupdown}></Route> 
       <Route exact path='/Task2' component={Task2}></Route>
      {/* <Route exact path='/Practise' component={Practise}></Route> */}
      <Route exact path='/Task3' component={Task3}></Route>
      <Route exact path='/Task4' component={Task4}></Route>
      <Route exact path='/Demo' component={Demo}></Route>
      <Route exact path='/Demo1' component={Demo1}></Route>
    </Switch>
  </Router>
  </div>
  );
}
export default App;








