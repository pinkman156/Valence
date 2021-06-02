import { React, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
var cors = require("cors");

const spotifyApi = new SpotifyWebApi({
  clientId: "51d00219190a49e0bfc56014f5acc6d0",
});

export default function Math(props) {
  const accessToken = props.accessToken;
  // const [valence, setValence] = useState(0);
  // const [tempo, setTempo] = useState(0);
  // const [energy, setEnergy] = useState(0);
  // const [dance, setDance] = useState(0);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    // if (props.tracksInfo  == undefined || props.tracksInfo.length === 0) return;
    spotifyApi
      .getAudioFeaturesForTracks(props.recent)
      .then((data) => {
        // conso.log(result.body.items);
        console.log(props.tracksInfo);
        props.setTracksInfo(
          ...props.tracksInfo,
          data.body.audio_features.map((item) => ({
            id: item.id,
            danceability: item.danceability,
            energy: item.energy,
            valence: item.valence,
            tempo: item.tempo,
          }))
        );
        return;
      })
      .catch((err) => console.log(err));
  }, [props.recent]);

  function returnRange(val) {
    if (val > 0 && val <= 0.3) {
      return "low";
    } else if (val > 0.3 && val <= 0.7) {
      return "mid";
    } else if (val > 0.7) return "high";
  }

  function select_tracks(tempo, valence, energy, dance) {
    console.log(tempo);
    console.log(valence);
    console.log(energy);
    console.log(dance);
    // if (props.tracksInfo.length !== 20) return;
    let d = returnRange(dance);
    let e = returnRange(energy);
    //   let instrumentalness = returnRange(track.instrumentalness);
    //   let speechiness = returnRange(track.speechiness);
    let v = returnRange(valence);
    let t = tempo;

    if (e === "mid" && v === "mid") {
      props.setMood("Chill");
    } else if (e === "high") {
      props.setMood("Hyped");
    } else if (v === "high") {
      props.setMood("Happy");
    } else if (e === "low" && v !== "high") {
      props.setMood("Feelz");
    } else if (v === "low" && e === "low") {
      props.setMood("Sad");
    } else if (d === "high") {
      props.setMood("Dance");
    } else if (v === "mid") {
      props.setMood("Mixed");
    } else if (d === "high" && e === "high") {
      props.setMood("Party");
    } else {
      props.setMood("Confused");
    }
  }

  useEffect(() => {
    console.log(props.tracksInfo);
    if (
      props.tracksInfo.length > 0 &&
      props.tracksInfo != undefined &&
      props.tracksInfo.length === 20
    ) {
      let temp = 0;
      let val = 0;
      let energy = 0;
      let dance = 0;
      props.tracksInfo.map((track) => {
        // setValence(valence + track.valence);
        // console.log("20");
        // console.log(tempo);
        // console.log(track.tempo);
        temp = temp + track.tempo;
        val = val + track.valence;
        energy = energy + track.energy;
        dance = dance + track.danceability;
        // console.log(temp);
        // setTempo(temp);
        // setEnergy(energy + track.energy);
        // setDance(dance + track.danceability);
      });

      // console.log(tempo);

      // setValence((valence * 1.0) / 20);
      // setTempo(tempo / 20);
      // setEnergy(energy / 20);
      // setDance(dance / 20);
      select_tracks(
        temp / 20,
        (val * 1.0) / 20,
        energy / 20,
        (dance * 1.0) / 20
      );
    }

    return;
  }, [props.tracksInfo]);

  return <div></div>;
}
