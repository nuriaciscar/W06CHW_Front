import { useSelector } from "react-redux";
import "./App.css";

function App() {
  useSelector(({ robots }) => robots);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
