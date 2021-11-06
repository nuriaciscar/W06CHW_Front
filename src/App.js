import "./App.css";
import RobotList from "./components/RobotList/RobotList";
import FormCreate from "./components/FormCreate/FormCreate";
import useRobots from "./hooks/useRobots";
import { useEffect } from "react";

function App() {
  const { loadRobots, robots } = useRobots();
  console.log(robots);
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="App">
      <h1>My robots</h1>
      <FormCreate />
      <RobotList />
    </div>
  );
}

export default App;
