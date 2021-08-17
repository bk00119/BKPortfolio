import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Menu.css";

const Menu = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  const openMenu = () => {
    setShow(true);
    // console.log(document.getElementById("Menu").style.width);
    document.getElementById("MenuBtn").style.display = "none";
    document.getElementById("Menu").style.width = "15em";
  };

  const closeMenu = () => {
    setShow(false);
    // console.log(document.getElementById("Menu").style.width);
    document.getElementById("Menu").style.width = "0px";
    document.getElementById("MenuBtn").style.display = "block";
  };

  const showMenu = async () => {
    // show not rendering right away as show changes...so going opposite
    if (!show) {
      document.getElementById("MenuBtn").style.display = "none";
      document.getElementById("Menu_Content").style.width = "15em";
      document.getElementById("Menu_CloseBtn").style.visibility = "visible";
      // document.getElementById("MenuBtn").style.left = "1em";
    } else {
      document.getElementById("Menu_Content").style.width = "0px";
      document.getElementById("MenuBtn").style.display = "block";
      document.getElementById("Menu_CloseBtn").style.visibility = "hidden";
    }
    await setShow(!show);
  };

  return (
    <div class="Menu">
      <div
        class="MenuBtn MenuBtn_Bounce"
        id="MenuBtn"
        onClick={() => showMenu()}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="Menu_Content" id="Menu_Content">
        <div className="Menu_Contents">
          <span class="Menu_Dir">
            <a href="#Home">Home</a>
          </span>
          <span class="Menu_Dir">
            <a href="#Skills">Skills</a>
          </span>
          <span class="Menu_Dir">
            <a href="#Timeline">Timeline</a>
          </span>
          <span class="Menu_Dir">
            <a href="#Projects">Projects</a>
          </span>
          <span class="Menu_Dir">
            <a href="#Contact">Contact</a>
          </span>
        </div>
        <div
          class="Menu_CloseBtn"
          id="Menu_CloseBtn"
          onClick={() => showMenu()}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
