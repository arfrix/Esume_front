import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import views
import Home from "./views/Home";
import NotFount from "./views/404";
import TechStackSelection from './views/TechStackSelection'
import SkillLevel from './views/SkillLevel'

export default function Routes() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact ><Home /></Route>
          <Route path="/techstack" exact ><TechStackSelection /></Route>
          <Route path="/skilles" exact ><SkillLevel /></Route>
          <Route path="/*"><NotFount /></Route>
      </Switch>
    </Router>
  )
}