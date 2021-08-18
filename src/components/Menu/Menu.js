import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Menu.css";

const Menu = () => {
  const [show, setShow] = useState(false);
  console.log(show);

  const openMenu = () => {
    document.getElementById("MenuBtn").style.display = "none";
    document.getElementById("Menu_Content").style.width = "15em";
    document.getElementById("Menu_CloseBtn").style.visibility = "visible";
    setShow(true);
  };

  const closeMenu = () => {
    document.getElementById("Menu_Content").style.width = "0px";
    document.getElementById("MenuBtn").style.display = "block";
    document.getElementById("Menu_CloseBtn").style.visibility = "hidden";
    setShow(false);
  };

  const showMenu = async () => {
    // show not rendering right away as show changes...so going opposite
    // if (!show) {
    //   // document.getElementById("MenuBtn").style.left = "1em";
    //   openMenu();
    // } else {
    //   closeMenu();
    // }
    show ? closeMenu() : openMenu();
    await setShow(!show);
  };

  return (
    <div class="Menu">
      <div
        class="MenuBtn MenuBtn_Bounce"
        id="MenuBtn"
        onClick={() => openMenu()}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="Menu_Content" id="Menu_Content">
        <div className="Menu_Contents">
          <span class="Menu_Dir">
            <a href="#Home" onClick={() => closeMenu()}>
              Home
            </a>
          </span>
          <span class="Menu_Dir">
            <a href="#Skills" onClick={() => closeMenu()}>
              Skills
            </a>
          </span>
          <span class="Menu_Dir">
            <a href="#Timeline" onClick={() => closeMenu()}>
              Timeline
            </a>
          </span>
          <span class="Menu_Dir">
            <a href="#Projects" onClick={() => closeMenu()}>
              Projects
            </a>
          </span>
          <span class="Menu_Dir">
            <a href="#Contact" onClick={() => closeMenu()}>
              Contact
            </a>
          </span>
        </div>
        <div
          class="Menu_CloseBtn"
          id="Menu_CloseBtn"
          onClick={() => closeMenu()}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
