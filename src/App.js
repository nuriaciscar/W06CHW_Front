import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Robot from "./components/Robot/Robot";
import FormCreate from "./components/FormCreate/FormCreate";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      {JSON.stringify(robots)}
      <header className="App-header"></header>
      <FormCreate />
      <Robot />
    </div>
  );
}

export default App;
