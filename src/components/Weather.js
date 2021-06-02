import React, { useState, useEffect } from "react";

export default function Weather(props) {
  useEffect(() => {
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "58bb6154b9fb293bad45b448397de3ee";
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      console.log(position);

      let url =
        api +
        "?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        apiKey +
        "&units=imperial";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          props.weather(data.weather);
          props.temp(data.main.temp);
          props.place(data.name);
          // let temp = data.main.temp;
        });
    }

    function error() {
      console.log("error");
    }
  }, []);

  return <div></div>;
}
