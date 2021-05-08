import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddContainer } from "./controller/AddContainer";
import { EditContainer } from "./controller/EditContainer";
import { ListContainer } from "./controller/ListContainer";
import { NewUserContainer } from "./controller/NewUserContainer";
import { LoginContainer } from "./controller/LoginContainer";
import { LandingPage } from "./component/LandingPage";
import { NavMenu } from "./component/NavMenu";
import { useEffect, useState } from "react";
import { theme } from "./material-ui/theme";
import { ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const [loginStatus, setLoginStatus] = useState({ isLoggin: false });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setLoginStatus({ isLoggin: true });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavMenu loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
          <Switch>
            {loginStatus.isLoggin && (
              <Route path="/events/add">
                <AddContainer />
              </Route>
            )}
            {loginStatus.isLoggin && (
              <Route path="/events/edit/:id">
                <EditContainer />
              </Route>
            )}
            <Route path="/users/register">
              <NewUserContainer />
            </Route>
            <Route path="/users/login">
              <LoginContainer setLoginStatus={setLoginStatus} />
            </Route>
            {loginStatus.isLoggin && (
              <Route path="/events">
                <ListContainer />
              </Route>
            )}
            <Route path="/">
              <LandingPage setLoginStatus={setLoginStatus} />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export { App };
