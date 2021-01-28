import "./App.css";
import Header from "./Header/Header";
import Homebody from "./Homebody/Homebody";
import ResumePage from "./ResumePage/ResumePage";

function App() {
  return (
    <div className="app">
        <Header />
    <div className="main">
        <Homebody />
        <ResumePage />
    </div>
    </div>
  );
}

export default App;
