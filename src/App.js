import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skill } from "./components/Skill";
import { Experience } from "./components/Experience";
import { Interest } from "./components/Interest";
import { More } from "./components/More";
import { NotFound } from "./components/NotFound";
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/interest" component={Interest} />
          <Route exact path="/more" component={More} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
