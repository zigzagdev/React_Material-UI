import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      {/*<Switch>*/}
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
      {/*</Switch>*/}
    </Router>
  );
}

export default App;
