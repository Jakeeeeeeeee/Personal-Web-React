import "./Pages.css";
import Homebody from "./Homebody/Homebody";
import ProjectPage from "./ProjectPage/ProjectPage";
import ResumePage from "./ResumePage/ResumePage";
import ServicePage from "./ServicePage/ServicePage";
import ContactPage from "./ContactPage/ContactPage";

const Pages = ({active,}) => (
    <div className="pages">
        <Homebody  active={active} />
        <ResumePage active={active}/>
        <ServicePage active={active}/>
        <ProjectPage active={active}/>
        <ContactPage active={active}/>
      </div>
);

export default Pages;