import { useEffect, useState } from "react";
import React, { useRef } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y1kgv3c",
        "template_tphl0na",
        form.current,
        "3Ce2qfUWobpQ_fUmV"
      )
      .then(
        (result) => {
          alert("Message successfully sent");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in the Full-Time Full Stack / Front End Developer
            role. If you want to have a chat, please dont hesitate to contact me
            using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mohit Soni,
          <br />
          Madhya Pradesh,
          <br />
          India
          <br />
          <span>(mohitsooonni@gmail.com)</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[21.8129, 80.1838]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[21.8129, 80.1838]} zoom={13}>
              <Popup>I live here, come over for some Tea/Coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
