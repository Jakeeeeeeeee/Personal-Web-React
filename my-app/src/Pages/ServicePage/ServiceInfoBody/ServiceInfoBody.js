import "./ServiceInfoBody.css";
import html from "./img/html.png";
import css from "./img/css.jfif";
import js from "./img/js.jfif";
import bootstrap from "./img/bootstrap.jfif";
import react from "./img/react.jfif";
import java from "./img/java.jfif";
import ServiceInfoBodyContent from "./ServiceInfoBodyContent/ServiceInfoBodyContent";

const ServiceInfoBody = () => (
  <div className="service_info_body">
    <ServiceInfoBodyContent
      pic={html}
      title="HTML5"
      content="This is the html5This is the html5This is the html5This is the
          html5"
    ></ServiceInfoBodyContent>

    <ServiceInfoBodyContent
      pic={css}
      title="Css3"
      content="This is the html5This is the html5This is the html5This is the
          html5"
    ></ServiceInfoBodyContent>

    

    <ServiceInfoBodyContent
      pic={js}
      title="JavaScript"
      content="This is the html5This is the html5This is the html5This is the
          html5"
    ></ServiceInfoBodyContent>

    <ServiceInfoBodyContent
      pic={bootstrap}
      title="Bootstrap"
      content="This is the html5This is the html5This is the html5This is the
          html5"
    ></ServiceInfoBodyContent>

    <ServiceInfoBodyContent
      pic={react}
      title="React"
      content="This is the html5This is the html5This is the html5This is the
          html5"
    ></ServiceInfoBodyContent>

<ServiceInfoBodyContent
      pic={java}
      title="Java"
      content="This is the html5This is the html5This is the html5This is the
          html5"
    ></ServiceInfoBodyContent>

    {/* <div className="service_info_body_card">
      <div className="service_info_body_pic">
        <img src={html} alt="html" />
      </div>
      <div className="service_info_body_text">
        <h5>HTML 5</h5>
        <p>
          This is the html5This is the html5This is the html5This is the
          html5
        </p>
      </div>
    </div>

    <div className="service_info_body_card">
      <div className="service_info_body_pic">
        <img src={css} alt="css" />
      </div>
      <div className="service_info_body_text">
        <h5>HTML 5</h5>
        <p>
          This is the html5This is the html5This is the html5This is the
          html5
        </p>
      </div>
    </div>

    <div className="service_info_body_card">
      <div className="service_info_body_pic">
        <img src={js} alt="javascript" />
      </div>
      <div className="service_info_body_text">
        <h5>HTML 5</h5>
        <p>
          This is the html5This is the html5This is the html5This is the
          html5
        </p>
      </div>
    </div>

    <div className="service_info_body_card">
      <div className="service_info_body_pic">
        <img src={bootstrap} alt="bootstrap" />
      </div>
      <div className="service_info_body_text">
        <h5>HTML 5</h5>
        <p>
          This is the html5This is the html5This is the html5This is the
          html5
        </p>
      </div>
    </div>

    <div className="service_info_body_card">
      <div className="service_info_body_pic">
        <img src={react} alt="react" />
      </div>
      <div className="service_info_body_text">
        <h5>HTML 5</h5>
        <p>
          This is the html5This is the html5This is the html5This is the
          html5
        </p>
      </div>
    </div>

    <div className="service_info_body_card"> 
      <div className="service_info_body_pic">
        <img src={java} alt="java" />
      </div>
      <div className="service_info_body_text">
        <h5>HTML 5</h5>
        <p>
          This is the html5This is the html5This is the html5This is the
          html5
        </p>
      </div>
    </div> */}
  </div>
);

export default ServiceInfoBody;
