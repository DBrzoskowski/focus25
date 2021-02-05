import React from 'react';
import Pomodoro from "./Pomodoro";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import TaskDetail from "../components/Tasks/TaskDetail";

function App() {
    return (
        <div className="Routing">
          <Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              {/*<li><Link to={'/task-detail'} className="nav-link">Task detail</Link></li>*/}
            </ul>
            </nav>
            <Switch>
                <Route exact path='/' component={Pomodoro} />
                <Route path='/task-detail' component={TaskDetail} />
            </Switch>
            </div>
          </Router>
        </div>
    );
}

export default App;
