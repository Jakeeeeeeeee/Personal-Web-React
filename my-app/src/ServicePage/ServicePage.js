import "./ServicePage.css";
import ServiceInfoTitle from "./ServiceInfoTitle/ServiceInfoTitle";
import ServiceInfoBody from "./ServiceInfoBody/ServiceInfoBody";
import Page from "../Page/Page";

const ServicePage = () => (
  <Page title="Service">
    <ServiceInfoTitle />
    <ServiceInfoBody />
  </Page>
);

export default ServicePage;
