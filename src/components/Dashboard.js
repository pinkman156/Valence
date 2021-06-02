import { React, useState, useEffect } from "react";
import Footer from "./Footer";
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

  useEffect(() => {
    let index = 0; // This will keep track of the current array index to use
    let ig = document.getElementById("img"); // Get your reference just once, not on each function call

    function autoChange() {
      if (img.length !== 20 || flag === true) return;
      if (index < img.length) {
        ig.src = img[index];
        index++;
        console.clear();
        console.log(img[index]);
      } else {
        if (mood === "Dance")
          ig.src =
            "https://cdn1.ftimg.com/images/logos/big/en_US/dance-logo.png";
        setflag(true);
        return;
      }
      console.log(mood);

      setTimeout(autoChange, 500);
    }

    autoChange();
  }, [img]);

  // useEffect(() => {
  //   if (load) setflag(true);
  // }, [load]);

  return (
    <div className="body">
      <div className="fav">
        <h2>
          Top Artist:{" "}
          {fav !== "" ? <span style={{ color: "white" }}>{fav}</span> : ""}
        </h2>
        <h2>
          Top Track:{" "}
          {fav !== "" ? <span style={{ color: "white" }}>{top}</span> : ""}
        </h2>
      </div>
      <div className="container1">
        <div className="box1">
          {load === false ? <h1>Loading</h1> : load}
          {flag === true ? (
            <div>
              <h1>
                Valence found out that you are in a{" "}
                <span style={{ color: "white" }}>{mood} </span> mood
              </h1>
              <div className="innerbox">
                <h2>Here are some more {mood} tracks for you to listen</h2>
                {console.log(mood)}
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
        />

        {recent.length > 0 ? (
          <Math
            accessToken={accessToken}
            recent={recent}
            tracksInfo={tracksInfo}
            setTracksInfo={setTracksInfo}
            setMood={setMood}
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
        {/* {autoChange} */}
      </div>

      <Footer />
    </div>
  );
}
