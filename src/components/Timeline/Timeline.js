import "./Timeline.css";

const Timeline = () => {
  console.log();

  return (
    <div className="Timeline_Page">
      <h2 class="Page_Title">Timeline</h2>
      {/* <SkillSphere /> */}

      <div class="Timeline">
        <div class="Timeline_Line"></div>
        <div class="Timeline_Section">
          <div class="Timeline_Bead"></div>
          <div class="Timeline_Content">
            <span class="Timeline_Year">2000</span>
            <p class="Timeline_Event">Born in Busan, South Korea</p>
          </div>
        </div>

        <div class="Timeline_Section">
          <div class="Timeline_Bead"></div>
          <div class="Timeline_Content">
            <span class="Timeline_Year">2014</span>
            <p class="Timeline_Event">Moved to New York</p>
          </div>
        </div>

        {/* Mention projects I did at Westtown? */}

        <div class="Timeline_Section">
          <div class="Timeline_Bead"></div>
          <div class="Timeline_Content">
            <span class="Timeline_Year">2019</span>
            <p class="Timeline_Event">
              Graduated from Westtown School & Entered New York University as a
              Computer Science major
            </p>
          </div>
        </div>

        <div class="Timeline_Section">
          <div class="Timeline_Bead"></div>
          <div class="Timeline_Content">
            <span class="Timeline_Year">2020</span>
            <p class="Timeline_Event">
              Joined Republic of Korea Army as a Signalman
            </p>
          </div>
        </div>

        <div class="Timeline_Section">
          <div class="Timeline_Bead"></div>
          <div class="Timeline_Content">
            <span class="Timeline_Year">2021</span>
            <p class="Timeline_Event">
              Created HostFam & Discharged from the Army
            </p>
          </div>
        </div>
      </div>

      {/* Add more later.. */}
    </div>
  );
};

export default Timeline;
