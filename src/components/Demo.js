import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Demo(props) {
  const [flag, setflag] = useState(false);
  const [img, setImg] = useState([
    "https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0",
    "https://i.scdn.co/image/ab67616d0000b273a4dfa7122ec07fe3a1af22e7",
    "https://i.scdn.co/image/ab67616d0000b273288d32d88a616b9a278ddc07",
    "https://i.scdn.co/image/ab67616d0000b273d9ac65941679b76106866c87",
    "https://i.scdn.co/image/ab67616d0000b2739bbd79106e510d13a9a5ec33",
    "https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42",
    "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",
    "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
    "https://i.scdn.co/image/ab67616d0000b2737d15fb20303a589acc1ab98b",
    "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
    "https://i.scdn.co/image/ab67616d0000b2731d5cf960a92bb8b03fc2be7f",
    "https://i.scdn.co/image/ab67616d0000b2731d97ca7376f835055f828139",
  ]);

  useEffect(() => {
    let index = 0;
    let ig = document.getElementById("img");

    function autoChange() {
      if (img.length !== 12 || flag === true) return;
      if (index < img.length) {
        ig.src = img[index];
        index++;
      } else {
        setflag(true);
        return;
      }
      setTimeout(autoChange, 500);
    }

    autoChange();
  }, [img]);

  return (
    <div className="body">
      <Navbar />
      <div className="header">
        <div className="info">
          <h2
            style={{
              color: "white",
              textAlign: "left",
              marginLeft: "8%",
              marginTop: "7% ",
              marginBottom: "-3%",
            }}
          >
            Welcome to Valence,{" "}
            <img
              class="pfp"
              width="50"
              height="50"
              src="https://i.scdn.co/image/ab6775700000ee85a5fa37f494ff2313f73a7837"
            />
            {"   "}
            <span style={{ color: "green" }}>Plural</span>{" "}
          </h2>
        </div>
        <div className="fav">
          <h2>
            Top Artist: <span style={{ color: "red" }}>Daft Punk</span>
          </h2>
          <h2>
            Top Track: <span style={{ color: "red" }}>Self Care</span>
          </h2>
        </div>
      </div>
      <div className="container1">
        <div className="box1">
          {flag === true ? (
            <div>
              <h1>
                Valence found out that you are in a{" "}
                <span style={{ color: "red" }}>Chill </span> mood
              </h1>
              <div className="innerbox">
                <h2 style={{ color: "orange" }}>
                  Here are some more Chill tracks for you to listen
                </h2>
                <h2>Sorry, you need to be logged in to play songs</h2>
              </div>
            </div>
          ) : (
            <h2>Please wait while Valence judges your mood...</h2>
          )}
        </div>

        <section>
          <figure>
            <img
              id="img"
              class="displayed-img"
              width="350"
              src="imgs/pic0.jpg"
            />
          </figure>
        </section>
      </div>
      <div className="stats">
        Your average stats based on your recent listening:
        <div className="val">
          <h3>
            Acousticness: <span style={{ color: "black" }}>0.32</span>{" "}
          </h3>
          <h3>
            Tempo: <span style={{ color: "black" }}>113.59</span>{" "}
          </h3>
          <h3>
            Danceability: <span style={{ color: "black" }}>0.68</span>{" "}
          </h3>
          <h3>
            Energy: <span style={{ color: "black" }}>0.51</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
