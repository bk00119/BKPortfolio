import React, { useState, useEffect, useRef } from "react";

import SkillSphere from "./SkillSphere";
// import Sphere from "./Sphere";
import "./Skills.css";

const Skills = () => {
  let tagName = [
    { id: "HTML", name: "HTML" },
    { id: "CSS", name: "CSS" },
    { id: "JavaScript", name: "JavaScript" },
    { id: "React JS", name: "React JS" },
    { id: "Node JS", name: "Node JS" },
    { id: "Express", name: "Express" },
    { id: "Mongoose", name: "Mongoose" },
    { id: "PHP", name: "PHP" },
    { id: "Python", name: "Python" },
    { id: "C++", name: "C++" },
    { id: "AWS", name: "AWS" },
    { id: "MySQL", name: "MySQL" },
    { id: "Mongo DB", name: "Mongo DB" }
  ];
  tagName = [...tagName];

  const click = () => {};

  return (
    <div className="Skills" id="Skills">
      {/* <h2 class="Page_Title">My Skills</h2> */}
      {/* <SkillSphere /> */}
      {/* <Sphere /> */}
      <div class="Skills_Detail">
        <div class="SkillSphere">
          <SkillSphere />
        </div>

        <div class="Skill_Description">
          <h2 class="Page_Title">My Skills</h2>
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
            {/* While I was in Republic of Korea Army, I spent my free time creating
            a web platform, HostFam. */}
            I have managed and participated in several projects since I was in
            High School. Most recently, I released a beta version of a web
            platform, HostFam, which connects host families in the United States
            and foreigners looking for a host family and a home, mostly
            international students. Working on a project independently, I
            sharpened my skills in full-stack programming and managing a project
            on time and on budget.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
