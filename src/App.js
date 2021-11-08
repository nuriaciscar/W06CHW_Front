import "./App.css";
import FormCreate from "./components/FormCreate/FormCreate";
import useRobots from "./hooks/useRobots";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const { loadRobots } = useRobots();

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
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          {/* <Route path="/logout" exact>
            <Logout />
          </Route> */}
          <Route path="/" exact>
            <Redirect to="/robots" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
