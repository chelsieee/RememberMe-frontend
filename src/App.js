import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddContainer } from "./controller/AddContainer";
import { EditContainer } from "./controller/EditContainer";
import { ListContainer } from "./controller/ListContainer";
import {NewUserContainer} from './controller/NewUserContainer'

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/events/add">
          <AddContainer/>
          </Route>
          <Route path="/events/edit/:id">
            <EditContainer />
          </Route>
          <Route path="/users/new">
            <NewUserContainer/>
          </Route>
          <Route path="/">
            <ListContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export { App };
