import React from 'react';
import Pomodoro from "./Pomodoro";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import TaskDetail from "../components/Tasks/TaskDetail";
import Calendar from "../components/Calendar";
import GoogleLogin from "react-google-login";
import googleLogin from "../components/auth/googleLoginService";

function App() {
    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }
    return (
        <div className="Routing">
          <Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/calendar'} className="nav-link">Calendar</Link></li>
              <GoogleLogin
              clientId="922438377414-u0m3ournvrco7u6inaqvc5p2t20b1p8u.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
              {/*<li><Link to={'/task-detail'} className="nav-link">Task detail</Link></li>*/}
            </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Pomodoro} />
                <Route path='/task-detail' component={TaskDetail} />
                <Route path='/calendar' component={Calendar} />
            </Switch>
            </div>

          </Router>
            <div>
          </div>
        </div>
    );
}

export default App;
