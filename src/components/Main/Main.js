import ContactBtn from "../Contact/ContactBtn/ContactBtn";
import Menu from "../Menu/Menu";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./Main.css";

const Main = () => {
  return (
    <div class="Main" id="Home">
      <Menu />
      <h1>
        Hi, <br />
        I'm <span class="Intro_Highlight">Brian Kim</span>.
      </h1>
      <h3>Full-Stack Developer</h3>
      <ContactBtn />
      <br />
      <br />
      <br />
      <h2 class="Page_Title ">Brief Introduction</h2>
      <div className="Main_Brief_Intro">
        <span>
          I'm a{" "}
          <span class="Highlight Highlight_Animation" id="highlight_1">
            Full-Stack Developer
          </span>{" "}
          located in NYC. I have a passion in{" "}
          <span class="Highlight Highlight_Animation" id="highlight_2">
            software/web development
          </span>
          . Currently, I'm majoring in{" "}
          <span class="Highlight Highlight_Animation" id="highlight_3">
            Computer Science at New York University
          </span>
          .
        </span>
      </div>
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
