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
import FeedbackPage from './components/pages/FeedbackPage';
import FeedbackFormPage from './components/pages/FeedbackFormPage';
import HelpPage from './components/pages/HelpPage'

function App() {
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
            <DashboardPage />
          </Route>
          
          <Route exact path="/helppage">
            <HelpPage />
          </Route>
          <Route path="/dashboard/values">
            <DashboardValues />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

