import { React, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
var cors = require("cors");

const spotifyApi = new SpotifyWebApi({
  clientId: "51d00219190a49e0bfc56014f5acc6d0",
});

export default function Recent(props) {
  const accessToken = props.accessToken;

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    spotifyApi
      .getMyRecentlyPlayedTracks({ limit: 20 })
      .then((result) => {
        // console.log(result.body.items);
        props.setRecent(result.body.items.map((item) => item.track.id));

        props.setImg(
          result.body.items.map(
            (item) =>
              // if (item.track.album.images != undefined)
              item.track.album.images[0].url
            // else {
            //   ("https://pbs.twimg.com/media/ELcMO4dWsAEdByn.png");
            // }
          )
        );

        //  else {
        props.setLoad(true);
        return;
      })
      .catch((err) => console.log(err));

    spotifyApi
      .getMyTopArtists({ limit: 1, time_range: "short_term" })
      .then((res) => {
        props.setFav(res.body.items[0].name);
      });

    spotifyApi
      .getMyTopTracks({ limit: 1, time_range: "short_term" })
      .then((res) => {
        props.setTop(res.body.items[0].name);
      });
  }, []);
  return <div></div>;
}
