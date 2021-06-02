import { React, useState } from "react";
import Playlist from "./Playlist";

export default function Suggest(props) {
  let play = "";
  let mood = props.mood;

  if (mood === "Chill") {
    console.log("what");
    play = "01lmejDidsoC1G5AQOEyw5";
  } else if (mood === "Hyped") play = "64gKHsysUZ9xM4aAGE1efP";
  else if (mood === "Feelz") play = "2gjTCusvr6lZ8vRSEkrtHd";
  else if (mood === "Sad") play = "37i9dQZF1DWSqBruwoIXkA";
  else if (mood === "Mixed") play = "01lmejDidsoC1G5AQOEyw5";
  else if (mood === "Dance") play = "47wJ7EnK8x3V9didTWjb1F";
  else if (mood === "Party") play = "5xS3Gi0fA3Uo6RScucyct6";
  return (
    <div>
      <Playlist accessToken={props.accessToken} playlist={play} />
    </div>
  );
}
