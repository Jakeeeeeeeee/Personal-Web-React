import "./ContactInfo.css";
import ContactInfoLeft from "./ContactInfoLeft/ContactInfoLeft";
import ContactInfoRight from "./ContactInfoRight/ContactInfoRight";

const ContactInfo = () => (
    <div className="contact_info">

      <ContactInfoLeft/>

      <ContactInfoRight />
  </div>
);

export default ContactInfo;