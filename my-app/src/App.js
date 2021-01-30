import "./App.css";
import ContactPage from "./ContactPage/ContactPage";
import Header from "./Header/Header";
import Homebody from "./Homebody/Homebody";
import ProjectPage from "./ProjectPage/ProjectPage";
import ResumePage from "./ResumePage/ResumePage";
import ServicePage from "./ServicePage/ServicePage";


function App() {
  return (
    <div className="app">
        <Header />
    <div className="main">
        <Homebody />
        <ResumePage  />
        <ServicePage />
        <ProjectPage />
        <ContactPage active />
    </div>
    </div>
  );
}

export default App;
