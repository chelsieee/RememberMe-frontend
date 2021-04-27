import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddContainer } from "./controller/AddContainer";
import { EditContainer } from "./controller/EditContainer";
import { ListContainer } from "./controller/ListContainer";
import { NewUserContainer } from "./controller/NewUserContainer";
import { LoginContainer } from "./controller/LoginContainer";
import {LandingPage} from './component/LandingPage'
import { useEffect, useState } from "react";

const App = () => {
  const [loginStatus, setLoginStatus] = useState({ isLoggin: false });

  useEffect(() => {
      const loggedInUser = localStorage.getItem("token");
      if (loggedInUser) {
        setLoginStatus({ isLoggin: true })}
    },[]);

  return (
    <div className="App">
      <Router>
        <Switch>
         {loginStatus.isLoggin && <Route path="/events/add">
            <AddContainer />
          </Route>}
          {loginStatus.isLoggin && <Route path="/events/edit/:id">
            <EditContainer />
          </Route>}
          <Route path="/users/new" >
            <NewUserContainer />
          </Route>
          <Route path="/users/login" >
            <LoginContainer setLoginStatus={setLoginStatus}/>
          </Route>
          <Route path ='/events'>
            <ListContainer />
          </Route>
          <Route path="/">
            <LandingPage setLoginStatus={setLoginStatus}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export { App };
