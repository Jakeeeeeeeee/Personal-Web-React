import "./App.css";
import Header from "./Header/Header";
import Homebody from "./Homebody/Homebody";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div id="home_body">
        <Homebody />
      </div>
    </div>
  );
}

export default App;
