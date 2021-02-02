import PageProps from "../PageProps/PageProps";
import ContactInfo from "./ContactInfo/ContactInfo";
import "./Contactpage.css";
import PageTitle from "../PageTitle/PageTitle";

const ContactPage = ({active,}) => (
  <PageProps  active={active}
        header={(<PageTitle>Contact</PageTitle>)}>
    <ContactInfo />
  </PageProps>
);

export default ContactPage;
