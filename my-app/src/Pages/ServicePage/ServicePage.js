import "./ServicePage.css";
import ServiceInfoTitle from "./ServiceInfoTitle/ServiceInfoTitle";
import ServiceInfoBody from "./ServiceInfoBody/ServiceInfoBody";
import PageProps from "../PageProps/PageProps";
import PageTitle from "../PageTitle/PageTitle";

const ServicePage = ({active,}) => (
  <PageProps  
    active={active}
    header={(<PageTitle>Services</PageTitle>)}
  >
    <ServiceInfoTitle />
    <ServiceInfoBody />
  </PageProps>
);

export default ServicePage;
