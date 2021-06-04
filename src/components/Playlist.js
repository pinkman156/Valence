import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";
var cors = require("cors");

const spotifyApi = new SpotifyWebApi({
  clientId: "51d00219190a49e0bfc56014f5acc6d0",
});

export default function Playlist(props) {
  const accessToken = props.accessToken;

  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    async function getTrack() {
      // console.log(` in playlist.js ${props.playlist}`);
      if (props.playlist === undefined || props.playlist === "") return;
      // console.log("passed");
      const res = await spotifyApi.getPlaylist(props.playlist);
      // console.log(res.body);

      setPlaylist(res.body);
      // console.log(playlist);

      setTracks(res.body.tracks.items);

      // console.log(tracks);
      if (tracks.length > 0) {
        setPlayingTrack(
          tracks[Math.floor(Math.random() * tracks.length)].track
        );
        console.log(playingTrack);
      }
    }

    if (accessToken) {
      getTrack();
      setLoad(true);
    }
  }, [accessToken, props.playlist]);

  function handleNext(e) {
    e.preventDefault();
    // console.log(tracks);
    if (tracks.length > 0) {
      setPlayingTrack(tracks[Math.floor(Math.random() * tracks.length)].track);
      console.log(playingTrack);
    }
  }

  return (
    <div className="playlist">
      {/* {console.log(load)} */}
      {load && tracks.length > 0 && (
        <div>
          {" "}
          <h2 style={{ color: "pink" }}>{playingTrack.name}</h2>{" "}
          <h3 style={{ marginTop: "-10%", color: "pink" }}>
            {playingTrack.artists !== undefined
              ? playingTrack.artists[0].name
              : null}
          </h3>
        </div>
      )}
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />

      <button
        className="btn"
        onClick={handleNext}
        style={{ marginTop: "2%", marginBottom: "2%" }}
      >
        Press To Play a Track
      </button>
    </div>
  );
}
