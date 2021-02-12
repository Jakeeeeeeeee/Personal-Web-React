import "./App.css";
import Header from "./Header/Header";
import Pages from "./Pages/Pages";
import PAGE from "./constants/constants";
import React from "react";


// const currentPage= PAGE.RESUME;
// const obj = {
//   currentPage: PAGE.HOME,
// };


// function App({render,}) {

//   const changePage = (pageName) => {
//     obj.currentPage = pageName;
//     render();
//   }

//   return (
//     <div className="app">
     
//       <Header currentPage={obj.currentPage} changePage={changePage}/>
//       <Pages currentPage={obj.currentPage} obj={obj}/>
//       </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGE.HOME,
    };

    // this.changePage = this.changePage.bind(this);
  }


   pageChanged = (pageName) => {
    this.setState({
      currentPage: pageName,
    });
  }

  render () {
    const { currentPage } = this.state;

   

    return (
      <div className="app">
     
      <Header currentPage={currentPage} changePage={this.pageChanged}/>
      <Pages currentPage={currentPage} />
      </div>
    );
  }
}

export default App;
