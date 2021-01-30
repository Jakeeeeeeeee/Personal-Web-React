import "./ServicePage.css";
import ServiceInfoTitle from "./ServiceInfoTitle/ServiceInfoTitle";
import ServiceInfoBody from "./ServiceInfoBody/ServiceInfoBody";
import Page from "../Page/Page";
import PageTitle from "../PageTitle/PageTitle";

const ServicePage = ({active,}) => (
  <Page  
    active={active}
    header={(<PageTitle>Services</PageTitle>)}
  >
    <ServiceInfoTitle />
    <ServiceInfoBody />
  </Page>
);

export default ServicePage;
