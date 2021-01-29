import "./ContactInfoLeft.css";
import  address from "./img/address.svg";
import email from "./img/email.svg";
import phone from "./img/phone.svg";
import correct from "./img/correct.svg";

const ContactInfoLeft = () =>(
    <div className="contact_info_body">
      <div className="contact_info_body_title">
        <span>Get in</span>
        <span className="clrchange">Touch</span>
      </div>
      
      <div id="contact_info_body_map"></div>

      <div className="contact_info_body_icon">
        <span>
          <img src={address} alt="address" />
        </span>
        <span> Melbourne, Australia </span>
      </div>

      <div className="contact_info_body_icon">
        <span>
          <img src={email} alt="email" />
        </span>
        <span> yangjinchen1995@gmail.com </span>
      </div>

      <div className="contact_info_body_icon">
        <span>
          <img src={phone} alt="phone" />
        </span>
        <span> +61 426 660 1500 </span>
      </div>

      <div className="contact_info_body_icon">
        <span>
          <img src={correct} alt="available" />
        </span>
        <span> Freelance available </span>
      </div>
    </div>

);

export default ContactInfoLeft;