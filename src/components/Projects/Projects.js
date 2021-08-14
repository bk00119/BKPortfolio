import "./Projects.css";

const Projects = () => {
  var hostFamImg = new Image();
  hostFamImg.src = "./Project_Image/HostFam_Img_Desktop.png";

  var int = setInterval(function () {
    if (hostFamImg.complete) {
      clearInterval(int);
      document.getElementById(
        "Project_HostFam"
      ).style.backgroundImage = `url(${hostFamImg.src})`;
    }
  }, 50);

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
