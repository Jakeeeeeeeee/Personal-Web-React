import Page from "../Page/Page";
import ContactInfo from "./ContactInfo/ContactInfo";
import "./Contactpage.css";
import PageTitle from "../PageTitle/PageTitle";

const ContactPage = ({active,}) => (
  <Page  active={active}
        header={(<PageTitle>Contact</PageTitle>)}>
    <ContactInfo />
  </Page>
);

export default ContactPage;
