import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Team from './Components/Team/Team'
import Dashboard from './Components/Dashboard/Dashboard'



const Routes = () => (
  <Router>
    <div>
      <Route path="/signup" component={Signup}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/team" component={Team}/>

    </div>
  </Router>
)

export default Routes
