import Page from "../Page/Page";
import ResumeInfo from "./ResumeInfo/ResumeInfo";
import "./ResumePage.css";
import PageTitle from "../PageTitle/PageTitle";



const ResumePage = ({active,}) => (

  <Page  active={active}
         header={(<PageTitle>Resume</PageTitle>)}>
    
        <ResumeInfo />
   
  </Page>
);


export default ResumePage;