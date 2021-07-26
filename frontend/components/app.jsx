import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
  useLocation
} from 'react-router-dom';
import Home from './home';
import NotFoundPage from './NotFoundPage'

const App = () => {

  const location = useLocation()

  return(
  <div className="top-div">
    <Switch>
      <Route exact path = "/" component ={Home}/>
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </div>
)};

export default App;