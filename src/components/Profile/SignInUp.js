import React, { useState } from "react";
import "../css/SignInUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
import { GoogleLogin } from "react-google-login";

import { Config } from "../Config";

const SignInUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [tabs, setTabs] = useState(0);
  const [message, setMessage] = useState("");
  // const [provider, setProvider] = useState()
  const navigate = useNavigate();
  // Google Response
  const googleSuccessResponse = (response) => {
    console.log(process.env);

    console.log(response.profileObj.name);
    axios
      .post(`https://server-app-sound.herokuapp.com/api/auth/login`, {
        name: response.profileObj.name,
        phone: "",
        email: response.profileObj.email,
        provider: "GOOGLE",
        isSubscribed: false,
        age: "",
        occupation: "",
      })
      .then((data) => {
        console.log("Success", data?.data);
        localStorage.setItem("@token", JSON.stringify(data?.data));
        if (data?.data?.userdata?.role === "MODERATOR") {
          navigate("/myprofile", { replace: true });
        }
        // if (data?.data?.isSubscribed) {
        else navigate("/events", { replace: true });
        // }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  const googleFailureResponse = (response) => {
    console.log(process.env);
    console.log(response);
  };

  const handleSubmit = (e, provide) => {
    console.log("API working");
    if (email === "") {
      return setMessage("Please enter the details");
    }
    e.preventDefault();
    if (provide) {
      axios
        .post(`https://server-app-sound.herokuapp.com/api/auth/login`, {
          name: name,
          phone: phone,
          email: email,
          provider: provide,
          isSubscribed: false,
          occupation: "",
          age: "",
        })
        .then((data) => {
          console.log("Success", data?.data);
          localStorage.setItem("@token", JSON.stringify(data?.data));
          if (data?.data?.userdata?.role === "MODERATOR") {
            navigate("/myprofile", { replace: true });
          }
          // if (data?.data?.isSubscribed) {
          else navigate("/events", { replace: true });
          // }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };
  const clientId1 =
    "886137909534-jf2qdlp4o1b83p100ev2msaa83dsn1nl.apps.googleusercontent.com";

  return (
    <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
      <div className="mp-left siu-left">
        <div className="siul-child">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={tabs == 1 ? "mpl-heading " : ""}>
              <p onClick={() => setTabs(1)}>Become a member now!</p>
            </div>
            <div className={tabs == 0 ? "mpl-heading " : ""}>
              <p onClick={() => setTabs(0)}>Already a memeber? SIGN IN</p>
            </div>
          </div>

          {message && (
            <p
              style={{
                color: "red",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {message}
            </p>
          )}
          {tabs === 0 && (
            <form>
              <div className="siuinput-parent">
                <p>Name</p>
                <input
                  type="text"
                  className="siu-input"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="siuinput-parent">
                <p>Email Address</p>
                <input
                  type="email"
                  className="siu-input"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="siubtn-parent">
                {/* <div
                  className="eprbtn2 siubtn1"
                  onClick={(e) => handleSubmit(e, "GOOGLE")}
                >
                  SIGN - UP WITH GOOGLE
                </div> */}
                <GoogleLogin
                  clientId={clientId1}
                  buttonText="Sign In With Google"
                  onSuccess={googleSuccessResponse}
                  onFailure={googleFailureResponse}
                  cookiePolicy="single_host_origin"
                  scope="profile email"
                />

                <h3
                  style={{
                    color: "grey",
                    margin: "2rem",
                  }}
                >
                  OR
                </h3>
                <div
                  className="eprbtn2 siubtn1"
                  style={{ width: "fit-content" }}
                  onClick={(e) => handleSubmit(e, "FACEBOOK")}
                >
                  SIGN IN
                </div>
              </div>
            </form>
          )}
          {tabs === 1 && (
            <form>
              <div className="siuinput-parent">
                <p>Name</p>
                <input
                  type="text"
                  className="siu-input"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="siuinput-parent">
                <p>Email Address</p>
                <input
                  type="email"
                  className="siu-input"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="siuinput-parent">
                <p>Phone</p>
                <input
                  type="number"
                  className="siu-input"
                  placeholder="015675675"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="siubtn-parent">
                <GoogleLogin
                  clientId={clientId1}
                  buttonText="Sign Up With Google"
                  onSuccess={googleSuccessResponse}
                  onFailure={googleFailureResponse}
                  cookiePolicy="single_host_origin"
                  scope="profile email"
                />
                <h3
                  style={{
                    color: "grey",
                    margin: "2rem",
                  }}
                >
                  OR
                </h3>
                <div
                  className="eprbtn2 siubtn1"
                  style={{ width: "fit-content" }}
                  onClick={(e) => handleSubmit(e, "FACEBOOK")}
                >
                  SIGN UP
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="siul-child">
          <div className="siul-child1">
            <div className="siul-child2">
              <h4>4000+ Speaking Opportunities From Across The World</h4>
              <p>
                New leads to apply everyday! Focus on speaking, not lead
                generation. Business growth opportunity - connect with the right
                audience.
              </p>
            </div>
            <br />
            <div>
              <h4>100+ SpeakerOre Exclusive Events</h4>
              <p>
                Reduces competition increasing the probability of being selected
                as a speaker
              </p>
            </div>
            <br />

            <div>
              <h4> Directly contact the event managers</h4>
              <p>
                No commissions, favouritism. Deal directly with the event
                managers.
              </p>
            </div>
            <br />

            <div>
              <h4> Saves your precious resources (Time, Money & Effort)</h4>
              <p>
                Easy, Efficient and Cost Effective. Saves Effort, Time and Money
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <LoggedInSidebar /> */}
    </div>
  );
};
export default SignInUp;
