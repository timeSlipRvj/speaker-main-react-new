import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <p className="heading1">ABOUT SPEAKERORE</p>

        <div className="cards-section">
          <div className="card">
            <div className="fp-cardtext">
              <p className="num" style={{ textAlign: "center" }}>
                01
              </p>
              <h3>4000+ Speaking Opportunities From Across The World</h3>
              <p className="desc">
                New leads to apply everyday! Focus on speaking, not lead
                generation. Business growth opportunity - connect with the right
                audience.
              </p>
            </div>

            <img
              className="image"
              src={require("../images/4000+ Speaking.png")}
              alt={""}
            />
          </div>
          <div className="card">
            <div className="fp-cardtext">
              <p className="num" style={{ textAlign: "center" }}>
                02
              </p>
              <h3>100+ SpeakerOre Exclusive Events</h3>
              <p className="desc">
                Reduces competition increasing the probability of being selected
                as a speaker
              </p>
            </div>

            <img
              className="image"
              src={require("../images/100+ SpeakerOre.png")}
              alt={""}
            />
          </div>
          <div className="card">
            <div className="fp-cardtext">
              <p className="num" style={{ textAlign: "center" }}>
                03
              </p>
              <h3>Directly contact the event managers</h3>
              <p className="desc">
                No commissions, favouritism. Deal directly with the event
                managers
              </p>
            </div>

            <img
              className="image"
              src={require("../images/Directly contact.png")}
              alt={""}
            />
          </div>
          <div className="card">
            <div className="fp-cardtext">
              <p className="num" style={{ textAlign: "center" }}>
                04
              </p>
              <h3>Saves your precious resources (Time, Money & Effort)</h3>
              <p className="desc">
                Easy, Efficient and Cost Effective. Saves Effort, Time and Money
              </p>
            </div>

            <img
              className="image"
              src={require("../images/Saves your precious resources.png")}
              alt={""}
            />
          </div>
        </div>
        {/* <div
          className="cards-section"
          style={{ position: "relative", top: "-7rem" }}
        >
          <div className="card">
            <div className="fp-cardtext">
              <p className="num" style={{ textAlign: "end" }}>
                04
              </p>
              <p className="desc">
                Fill the speakerore exclusive events form and increase your
                probabilty of being selected by the organizer.
              </p>
            </div>

            <img
              className="image"
              src={require("../images/about.jpg")}
              alt={""}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
