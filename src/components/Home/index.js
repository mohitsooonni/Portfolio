import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import man from "./Img/dev.svg";
import { motion } from "framer-motion";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    " ",
    "M",
    "o",
    "h",
    "i",
    "t",
    " ",
    "S",
    "o",
    "n",
    "i",
    ",",
  ];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <>
      <div className="container home-page">
        <motion.div
          className="svg"
          animate={{ translateY: [-20, 0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, repeatType: "reverse" }}
        >
          <img src={man} alt="Developer" />
        </motion.div>

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
