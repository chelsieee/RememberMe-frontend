import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddOrEditEvent } from "./component/AddOrEditEvent";
import { AddContainer } from "./component/AddContainer";
import { EditContainer } from "./component/EditContainer";
import { ListContainer } from "./component/ListContainer";
import { EventList } from "./component/EventList";

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add">
          <AddContainer/>
          </Route>
          <Route path="/edit/:id">
            <EditContainer />
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
