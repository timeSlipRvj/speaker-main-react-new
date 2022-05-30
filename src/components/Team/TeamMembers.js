import React from "react";

export default function TeamMembers() {
  return (
    <div className="ep-parent1">
      <div className="ep-left">
        <div className="epl-team">
          <p>Meet the Team</p>
        </div>
        <div className="team-body col-first">
          <div className="tupper">
            <div className="tprofilecard">
              <div className="image"></div>
              <img
              className="image"
              src={require("../images/Kumar achanta.PNG")}
              alt={""}
            />
              <div className="tpc-name">KUMAR ACHANTA</div>
              <div className="tpc-post">CO-FOUNDER</div>
            </div>
            <div className="tutext">
            From a shy kid who hid himself when called upon stage to winning contests in toastmasters, becoming a world class MC & International Speaker, Educational head at BNI Chapter, Secretary and VP Membership at toastmasters, executive committee member of the Professional Speakers Association of India (Part of the Global Speakers Federation) Kumar has come a long way in his speaking journey. 

Speaking in countries as far as South Africa, Romania, Singapore and more, he has truly measured the globe with his footprints. 

After quitting his glorious corporate career working in a Multi-National Firm , Kumar has been teaching - 'How to build confidence, Become resilient & Speak effectively' for the last 6 years.

Kumar always felt that it was difficult for competent and deserving people to find good platforms to be heard. So he started helping them find it. In the due course of time, he developed connections and expertise in the domain. Now he wants to help even more number of people worldwide find a stage that they deserve.

A cycling and health enthusiast kumar is known well for engaging his audiences. His hunger for reading, love for acting and knack for cooking has helped him create bonds beyond business. He inspires people through his speaking and empathizes  with fellow speakers who face struggles like he did in his life. A true visionary and leader in every sense of the word.
            </div>
          </div>
          <div className="tupper">
            <div className="tprofilecard">
            
              <div className="image"></div>
              <img
              className="image"
              src={require("../images/nikhil.jpg")}
              alt={""}
            />
              <div className="tpc-name">NIKHIL CHAUDHARY</div>
              <div className="tpc-post">CO-FOUNDER</div>
              
            </div>
            <div className="tutext">
              Nikhil Chaudhary an international speaker in wellness space is a
              serial entrepreneur who is also a founding board member of
              Professional Speakers Association of India which is a part of the
              global Speakers Federation. Common to all his businesses and his
              core personality he believes in solving the most important and
              complex problems of people in a simple manner. He is very well
              known in the circle as a giver who never hesitates to share. With
              these ideologies to solve the complex problem of Speakers, this
              world famous nutritionist co-founded Speakerore.
            </div>
          </div>
        
            {/* <div className="tlr1">
              <div className="tprofilecard">
                <div className="tpc-avatar"></div>
                <div className="tpc-name">MOHIT GOPAL</div>
                <div className="tpc-post">MANAGING DIRECTOR</div>
              </div>
              <div className="tprofilecard">
                <div className="tpc-avatar"></div>
                <div className="tpc-name">MOHIT GOPAL</div>
                <div className="tpc-post">MANAGING DIRECTOR</div>
              </div>
              <div className="tprofilecard">
                <div className="tpc-avatar"></div>
                <div className="tpc-name">MOHIT GOPAL</div>
                <div className="tpc-post">MANAGING DIRECTOR</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    
  );
}
