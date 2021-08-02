import SkillSphere from "./SkillSphere";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="Skills">
      <h2 class="Page_Title">My Skills</h2>
      {/* <SkillSphere /> */}
      <div class="Skill_Description">
        <div class="Skill_Description_P">
          I started my journey as a Full-Stack Developer in 2016, creating web
          apps for my High School.
        </div>
        <br />
        <div className="Skill_Description_P">
          Then, I learned Computer Science in depth at New York University.
        </div>
        <br />
        <div class="Skill_Description_P">
          While I was in Republic of Korea Army, I spent my free time creating a
          web platform, HostFam.
        </div>
      </div>
    </div>
  );
};

export default Skills;
