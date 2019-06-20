import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Newfile from './Newfile';
// import Oldfile from './Oldfile';
// import Trial from './Trial';
// import Add from './Task1/Add';
// import Ageupdown from './Component/Ageupdown';
import Task2 from './Component/Task2';
function App() {
  return (
    <div>
  <Router>
    <Switch>
      {/* <Route exact path='/Newfile' component={Newfile}></Route>
      <Route exact path='/Oldfile' component={Oldfile}></Route>
      <Route exact path='/Trial' component={Trial}></Route>
      <Route exact path='/Add' component={Add}></Route> */}
      {/* <Route exact path='/Ageupdown' component={Ageupdown}></Route> */}
      <Route exact path='/Task2' component={Task2}></Route>

    </Switch>
  </Router>
  </div>
  );
}
export default App;








