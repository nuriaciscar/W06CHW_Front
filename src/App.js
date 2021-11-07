import "./App.css";
import RobotList from "./components/RobotList/RobotList";
import FormCreate from "./components/FormCreate/FormCreate";
import useRobots from "./hooks/useRobots";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/Homepage";

function App() {
  const { loadRobots, robots } = useRobots();
  console.log(robots);
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/robots" exact>
            <HomePage />
          </Route>
          <Route path="/robots/create" exact>
            <FormCreate />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>

        <h1>My robots</h1>
      </Router>
    </div>
  );
}

export default App;
