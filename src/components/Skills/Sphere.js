import { useState, useEffect, useRef } from "react";
import jQuery from "jquery";
import { icon } from "@fortawesome/fontawesome-svg-core";
window.$ = window.jQuery = jQuery;
import "./script.js";

import TagCloud from "./2";
import Tag from "./tag";

const Sphere = () => {
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

  // var settings = {
  //   entries: entries,
  //   width: 640,
  //   height: 480,
  //   radius: "65%",
  //   radiusMin: 75,
  //   bgDraw: true,
  //   bgColor: "#1d1d1d",
  //   opacityOver: 1.0,
  //   opacityOut: 0.05,
  //   opacitySpeed: 6,
  //   fov: 800,
  //   speed: 2,
  //   fontFamily: "Courier, Aria, sans-serif",
  //   fontSize: "30",
  //   fontColor: "#f2aa4c",
  //   fontWeight: "bold",
  //   fontStyle: "normal",
  //   fontStretch: "normal",
  //   fontToUpperCase: false
  // };

  // $("#sphere").svg3DTagCloud(settings);
  // var svg3DTagCloud = new SVG3DTagCloud(
  //   document.getElementById("sphere"),
  //   settings
  // );
  // console.log(window.document.getElementById("sphere"));

  // SVG3DTagCloud(window.document.getElementById("sphere"), settings);

  return (
    // <div class="SkillSphere">
    //   <head>
    //     <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    //     <script src="script.js"></script>
    //   </head>
    //   {/* <style>
    //     #sphere {
    //         position: absolute;
    //         left: 25%;
    //         top: 15%;
    //       }
    //   </style> */}
    //   <div id="sphere"></div>
    // </div>
    <div className="Sphere">
      <TagCloud
        tagName={tagName}
        radius={200}
        // onClick={this.handleClick}
        // onClick={() => click()}
      ></TagCloud>
    </div>
  );
};

export default Sphere;
