import "./ResumeInfo.css";
import ResumeInfoBottom from "./ResumeInfoBottom/ResumeInfoBottom";
import ResumeInfoTop from "./ResumeInfoTop/ResumeInfoTop";
import ResumeSkillTitle from "./ResumeSkillTitle/ResumeSkillTitle";

const ResumeInfo = () => (
  <div className="resume_info">
    <ResumeInfoTop title="Education"></ResumeInfoTop>

    <ResumeInfoTop title="Experience"></ResumeInfoTop>

    <ResumeSkillTitle />

    <ResumeInfoBottom name1="HTML5" name2="CSS3" name3="Javascript(vanilla/Es6)"></ResumeInfoBottom>

    <ResumeInfoBottom name1="Bootstrap" name2="React" name3="Java"></ResumeInfoBottom>
  </div>
);

export default ResumeInfo;
