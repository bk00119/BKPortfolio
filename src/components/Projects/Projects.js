import "./Projects.css";

const Projects = () => {
  var hostFamImg = new Image();
  hostFamImg.src = "./Project_Image/HostFam_Img_Desktop.png";

  var shsiImg = new Image();
  shsiImg.src = "./Project_Image/SHSI_IMG_Desktop.jpg";

  var hostFamImgInt = setInterval(function () {
    if (hostFamImg.complete) {
      clearInterval(hostFamImgInt);
      document.getElementById(
        "Project_HostFam"
      ).style.backgroundImage = `url(${hostFamImg.src})`;
    }
  }, 50);

  var shsiImgInt = setInterval(function () {
    if (shsiImg.complete) {
      clearInterval(shsiImgInt);
      document.getElementById(
        "Project_SHSI"
      ).style.backgroundImage = `url(${shsiImg.src})`;
    }
  }, 50);

  return (
    <div className="Projects">
      <h2 class="Page_Title">Projects</h2>
      {/* <SkillSphere /> */}
      <div className="Project_Gallery">
        <section className="Project" id="HostFam">
          <div className="Project_Default_Background" id="Project_HostFam">
            <span className="Project_Title">HostFam</span>
          </div>
          <span className="Project_Description">
            Connecting host families in the US to global visitors, targeted
            international students
          </span>
        </section>
        <section className="Project" id="SHSI">
          <div className="Project_Default_Background" id="Project_SHSI">
            <span className="Project_Title">Study Hall Signin</span>
          </div>
          <span className="Project_Description">
            Web app for Westtown School students to sign in for study hall
          </span>
        </section>
        {/* <section className="Project"></section> */}
      </div>
    </div>
  );
};

export default Projects;
