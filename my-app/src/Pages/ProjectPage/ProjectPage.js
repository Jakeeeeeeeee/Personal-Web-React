import PageProps from "../PageProps/PageProps";
import "./ProjectPage.css";
import PageTitle from "../PageTitle/PageTitle";

const ProjectPage = ({active,}) => (
    <PageProps  active={active}
            header={(<PageTitle>Project</PageTitle>)}>
      
    </PageProps>
);


export default ProjectPage;