import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  });

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>

          <p align="LEFT">
            I'm very ambitious Full stack Developer looking for a role in
            estabilished IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            My stack: HTML, CSS, Javascript, Tailwind, React, Node, Express, MongoDB, Git, C++ 
            <br/>
            Currently learning: Next.js, MUI, Typescript
          </p>
          <p>
            I'm naturally curious and prepetually working on improving my skills
            one design problem at a time.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#ec4d38" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
