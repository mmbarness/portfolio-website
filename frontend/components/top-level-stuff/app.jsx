import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';
import { TopBar } from '../top-bar';
import { Home } from '../home';
import { NotFoundPage } from '../NotFoundPage'
import '../../style/reset.scss'
import '../../style/application.scss'

const App = () => {

  const location = useLocation()

  return(
    <div id="umbrella-div">
      <Route path = "/" component={TopBar} location ={location}/>
      <Switch>
        <Route exact path = "/" component ={Home}/>
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
)};

export default App;