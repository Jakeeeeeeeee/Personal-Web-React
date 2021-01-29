import "./ServiceInfoBodyContent.css";

const ServiceInfoBodyContent = ({pic, title, content}) =>(
    <div className="service_info_body_card">
      <div className="service_info_body_pic">
        <img src={pic} alt="html" />
      </div>
      <div className="service_info_body_text">
        <h5>{title}</h5>
        <p>
          {content}
        </p>
      </div>
    </div>
);

export default ServiceInfoBodyContent;