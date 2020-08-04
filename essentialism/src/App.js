import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './utils/PrivateRoute';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
// import Dashboard from "./components/pages/Dashboard";
import DashboardPage from "./components/pages/DashboardPage";
import NavBar from "./components/navbar/NavBar";
import DashboardValues from "./components/pages/DashboardValues";
import CreateUserPage from "./components/pages/CreateUserPage";
import WelcomeUserPage from "./components/pages/WelcomeUserPage";
import InitialAddValuesPage from "./components/pages/InitialAddValuesPage";
import EditValuesPage from "./components/pages/EditValuesPage";
import FeedbackPage from "./components/pages/FeedbackPage";
import FeedbackFormPage from "./components/pages/FeedbackFormPage";
import HelpPage from "./components/pages/HelpPage";
import CreateMoreValuesPage from "./components/pages/CreateMoreValuesPage";
import { Spring } from "react-spring/renderprops";
import EditGoalPage from "./components/goals/EditGoalPage";
function App(props) {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/createuser">
            <CreateUserPage />
          </Route>
          <Route path="/welcome">
            <WelcomeUserPage />
          </Route>
          <Route path="/choose-values">
            <InitialAddValuesPage />
          </Route>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>
          <Route path="/feedback-form">
            <FeedbackFormPage />
          </Route>
          <Route path="/feedback-form">
            <FeedbackFormPage />
          </Route>
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/dashboard">
            <Spring
              config={{ delay: 100, duration: 575 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {(props) => (
                <div style={props}>
                  <DashboardPage />
                </div>
              )}
            </Spring>
          </Route>

          <Route exact path="/helppage">
            <HelpPage />
          </Route>
          <Route path="/edit-values/:id" component={EditValuesPage} />
          <Route path="/dashboard/values">
            <DashboardValues />
          </Route>

          <Route path="/choose-change">
            <CreateMoreValuesPage />
          </Route>

          <Route path="/edit-goal" component={EditGoalPage} />
          {/* <Route path="/edit-goal">
            <EditGoalPage />
          </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
