import Page from "../Page/Page";
import "./ProjectPage.css";
import PageTitle from "../PageTitle/PageTitle";

const ProjectPage = ({active,}) => (
    <Page  active={active}
            header={(<PageTitle>Project</PageTitle>)}>
      
    </Page>
);


export default ProjectPage;