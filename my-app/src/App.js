import "./App.css";
import Header from "./Header/Header";
import Pages from "./Pages/Pages";


function App() {
  return (
    <div className="app">
      <Header />
      <Pages active/>
      </div>
  );
}

export default App;
