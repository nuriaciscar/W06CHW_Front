import "./App.css";
import RobotList from "./components/Robot/Robot";
import FormCreate from "./components/FormCreate/FormCreate";

function App() {
  return (
    <div className="App">
      <h1>My robots</h1>
      <FormCreate />
      <RobotList />
    </div>
  );
}

export default App;
