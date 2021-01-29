import "./ResumeInfoBottom.css";

const ResumeInfoBottom = ({name1, name2, name3}) => (
    <div className="resume_info_body">
      <p>{name1}</p>
      <div className="resume_skill_bar">
        <div className="resume_skill_bar3"></div>
      </div>
      <p>{name2}</p>
      <div className="resume_skill_bar">
        <div className="resume_skill_bar4"></div>
      </div>
      <p>{name3}</p>
      <div className="resume_skill_bar">
        <div className="resume_skill_bar2"></div>
      </div>
    </div>
);

export default ResumeInfoBottom;