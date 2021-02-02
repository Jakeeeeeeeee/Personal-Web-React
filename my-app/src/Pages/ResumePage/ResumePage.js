import PageProps from "../PageProps/PageProps";
import ResumeInfo from "./ResumeInfo/ResumeInfo";
import "./ResumePage.css";
import PageTitle from "../PageTitle/PageTitle";



const ResumePage = ({active,}) => (

  <PageProps  active={active}
         header={(<PageTitle>Resume</PageTitle>)}>
    
        <ResumeInfo />
   
  </PageProps>
);


export default ResumePage;