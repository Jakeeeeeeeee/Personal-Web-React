import "./ResumeInfoTop.css";

const ResumeInfoTop = ({title}) => (
    <div className="resume_info_body">
    <h3 className="resume_info_title">{title}</h3>
    <div className="resume_bigcard">
      <div className="resume_card"></div>
      <div className="resume_card"></div>
      <div className="resume_card"></div>
    </div>
  </div>
);

export default ResumeInfoTop;