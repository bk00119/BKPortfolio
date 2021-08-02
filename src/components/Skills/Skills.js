import SkillSphere from "./SkillSphere";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="Skills">
      <h2 class="Page_Title">My Skills</h2>
      {/* <SkillSphere /> */}
      <div class="Skill_Description">
        <div class="Skill_Description_P">
          I started my journey as a Full-Stack Developer in2016, creating web
          appsfor my High School.
        </div>
        <br />
        <div className="Skill_Description_P">
          Then, I learned ComputerScience in depth at NewYork University.
        </div>
        <br />
        <div class="Skill_Description_P">
          While I was in Republic ofKorea Army, I spent myfree time creating a
          webplatform, HostFam.
        </div>
      </div>
    </div>
  );
};

export default Skills;
