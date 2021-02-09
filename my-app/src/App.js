import "./App.css";
import Header from "./Header/Header";
import Pages from "./Pages/Pages";
import PAGE from "./constants/constants";


// const currentPage= PAGE.RESUME;
const obj = {
  currentPage: PAGE.HOME,
};


function App({render,}) {

  const changePage = (pageName) => {
    obj.currentPage = pageName;
    render();
  }

  return (
    <div className="app">
      <button onClick={() => console.log(obj.currentPage)}>Debug</button>
      <Header currentPage={obj.currentPage} changePage={changePage}/>
      <Pages currentPage={obj.currentPage} obj={obj}/>
      </div>
  );
}

export default App;
