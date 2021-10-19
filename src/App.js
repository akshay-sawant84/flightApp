import logo from "./logo.svg";
import "./App.css";
import Flight from "./Components/Screens/Flight";
import Store from "./Components/Context/Store";

function App() {
  return (
    <div className="container">
      <Store>
        <Flight />
      </Store>
    </div>
  );
}

export default App;
