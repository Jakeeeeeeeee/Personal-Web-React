import "./Pages.css";
import Homebody from "./Homebody/Homebody";
import ProjectPage from "./ProjectPage/ProjectPage";
import ResumePage from "./ResumePage/ResumePage";
import ServicePage from "./ServicePage/ServicePage";
import ContactPage from "./ContactPage/ContactPage";
import PAGE from "../constants/constants";

const Pages = ({currentPage,}) => (
    <div className="pages">
        <Homebody  active={currentPage === PAGE.HOME} />
        <ResumePage active={currentPage === PAGE.RESUME}/>
        <ServicePage active={currentPage === PAGE.SERVICES}/>
        <ProjectPage active={currentPage === PAGE.PROJECT}/>
        <ContactPage active={currentPage === PAGE.CONTACT}/>
      </div>
);

export default Pages;