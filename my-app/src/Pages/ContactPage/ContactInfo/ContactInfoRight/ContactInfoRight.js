import "./ContactInfoRight.css";
import Fname from "./img/name.svg";
import email2 from "./img/email2.svg";
import message from "./img/message.svg";

const ContactInfoRight = () => (
    <div className="contact_info_body">
    <div className="contact_info_body_title">
      <span>Contact</span>
      <span className="clrchange">Form</span>
    </div>

    <form className="contact_info_body_form">
      <div className="row">
        <div className="col-10">
          <img src={Fname} alt="Name" />
        </div>
        <div className="col-90">
          <input
            type="text"
            id="fullname"
            name="Fullname"
            placeholder="Full Name.."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <img src={email2} alt="Email" />
        </div>
        <div className="col-90">
          <input
            type="text"
            id="email"
            name="Email"
            placeholder="Email Address.."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-message">
          <img src={message} alt="Message" />
        </div>
        <div className="col-90">
          <textarea
            id="message"
            name="message"
            placeholder="Write Something.."
          ></textarea>
        </div>
      </div>

      <div className="row">
        <div
          className="g-recaptcha brochure__form__captcha"
          data-sitekey="YOUR SITE KEY"
        ></div>
      </div>

      <div className="row">
        <input type="submit" value="Send Message" />
      </div>
    </form>
  </div>

);

export default ContactInfoRight;