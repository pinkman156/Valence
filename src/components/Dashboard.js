import { React, useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Recent from "./Recent";
import Math from "./Math";
import Suggest from "./Suggest";
import Playlist from "./Playlist";

export default function Dashboard(props) {
  const accessToken = props.token;
  const [recent, setRecent] = useState([]);
  const [load, setLoad] = useState(false);
  const [flag, setflag] = useState(false);
  const [tracksInfo, setTracksInfo] = useState([]);
  const [img, setImg] = useState([]);
  const [mood, setMood] = useState("judging mood");
  const [fav, setFav] = useState("");
  const [top, setTop] = useState("");
  const [tempo, setTempo] = useState(0);
  const [dance, setDance] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [acous, setAcous] = useState(0);

  const [me, setMe] = useState("");

  useEffect(() => {
    let index = 0;
    let ig = document.getElementById("img");

    function autoChange() {
      if (img.length !== 20 || flag === true) return;
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

  // useEffect(() => {
  //   if (load) setflag(true);
  // }, [load]);

  return (
    <div className="body">
      <Navbar />
      <div className="header">
        <h2
          style={{
            color: "white",
            textAlign: "left",
            marginLeft: "8%",
            marginTop: "7% ",
            marginBottom: "-3%",
          }}
        >
          Welcome to Valence, <span style={{ color: "green" }}>{me}</span>{" "}
        </h2>
        <div className="fav">
          <h2>
            Top Artist:{" "}
            {fav !== "" ? (
              <span style={{ color: "red" }}>{fav}</span>
            ) : (
              <span style={{ color: "red" }}>Loading</span>
            )}
          </h2>
          <h2>
            Top Track:{" "}
            {fav !== "" ? (
              <span style={{ color: "red" }}>{top}</span>
            ) : (
              "Loading..."
            )}
          </h2>
        </div>
      </div>
      <div className="container1">
        <div className="box1">
          {flag === true ? (
            <div>
              <h1>
                Valence found out that you are in a{" "}
                <span style={{ color: "red" }}>{mood} </span> mood
              </h1>
              <div className="innerbox">
                <h2 style={{ color: "orange" }}>
                  Here are some more {mood} tracks for you to listen
                </h2>

                <Suggest accessToken={accessToken} mood={mood} />
              </div>
            </div>
          ) : (
            <h2>Please wait while Valence judges your mood...</h2>
          )}
        </div>
        <Recent
          accessToken={accessToken}
          setRecent={setRecent}
          setLoad={setLoad}
          setImg={setImg}
          img={img}
          setFav={setFav}
          setTop={setTop}
          setMe={setMe}
        />

        {recent.length > 0 ? (
          <Math
            accessToken={accessToken}
            recent={recent}
            tracksInfo={tracksInfo}
            setTracksInfo={setTracksInfo}
            setMood={setMood}
            setTempo={setTempo}
            setEnergy={setEnergy}
            setAcous={setAcous}
            setDance={setDance}
          />
        ) : (
          <h2>Fetching</h2>
        )}

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
            Acousticness: <span style={{ color: "black" }}>{acous}</span>{" "}
          </h3>
          <h3>
            Tempo: <span style={{ color: "black" }}>{tempo}</span>{" "}
          </h3>
          <h3>
            Danceability: <span style={{ color: "black" }}>{dance}</span>{" "}
          </h3>
          <h3>
            Energy: <span style={{ color: "black" }}>{energy}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
