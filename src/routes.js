import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import views
import Home from "./views/Home";
import NotFount from "./views/404";

export default function Routes() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact ><Home /></Route>
          <Route path="/*"><NotFount /></Route>
      </Switch>
    </Router>
  )
}