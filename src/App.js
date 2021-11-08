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
import { userLoginAction } from "./redux/actions/actionCreators";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

function App() {
  const { loadRobots } = useRobots();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)
    );
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  });

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact>
            <LoginForm />
          </Route>
          <Route path="/robots" exact>
            <HomePage />
          </Route>
          <Route path="/robots/create" exact>
            <FormCreate />
          </Route>
          <Route path="/user/login" exact>
            <LoginForm />
          </Route>
          {/* <Route path="/logout" exact>
            <Logout />
          </Route> */}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
