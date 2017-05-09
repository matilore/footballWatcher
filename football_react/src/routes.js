import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Provider } from 'react-redux'

import store , { history } from './store'


import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Selector from './Components/Team/Selector'
import Dashboard from './Components/Dashboard/Dashboard'



const Routes = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/signup" component={Signup}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/team" component={Selector}/>
      </div>
    </Router>
  </Provider>

)

export default Routes
