import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);
  if (!accessToken) return null;
  return (
    <div className="player" style={{ width: "50%", marginLeft: "25%" }}>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        initialVolume={5}
        syncExternalDevice
        // play={play}
        uris={trackUri ? [trackUri] : []}
        styles={{
          activeColor: "#fff",
          bgColor: "rgb(219, 201, 41)",
          color: "white",
          loaderColor: "black",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </div>
  );
}
