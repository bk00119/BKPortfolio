import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <h2 class="Page_Title">Projects</h2>
      {/* <SkillSphere /> */}
      <section className="Project">
        <div className="Project_Default_Background" id="Project_HostFam">
          <span className="Project_Title">HostFam</span>
        </div>
        <span className="Project_Description">
          Connecting host families in the US to global visitors, targeted
          international students
        </span>
      </section>
    </div>
  );
};

export default Projects;
