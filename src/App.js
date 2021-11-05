import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
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
    </div>
  );
}

export default App;
