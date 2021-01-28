import "./ResumeInfo.css";
import ResumeInfoLeft from "./ResumeInfoLeft/ResumeInfoLeft";
import ResumeInfoRight from "./ResumeInfoRight/ResumeInfoRight";
import ResumeSkillLeft from "./ResumeSkillLeft/ResumeSkillLeft";
import ResumeSkillRight from "./ResumeSkillRight/ResumeSkillRight";
import ResumeSkillTitle from "./ResumeSkillTitle/ResumeSkillTitle";

const ResumeInfo = () => (
    <div className="resume_info">
        <ResumeInfoLeft />

        <ResumeInfoRight />
  
        <ResumeSkillTitle />

        <ResumeSkillLeft />

        <ResumeSkillRight />
  </div>

);


export default ResumeInfo;