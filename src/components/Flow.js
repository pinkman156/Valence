import React from "react";

export default function Flow() {
  return (
    <div className="flow">
      <h2 className="title">Flow</h2>
      <div className="showflow">
        Login&nbsp;&nbsp;
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/800px-Arrow_east.svg.png"
          style={{ width: "20px" }}
          as
        ></img>
        &nbsp;&nbsp; Get accessToken to access the API&nbsp;&nbsp;
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/800px-Arrow_east.svg.png"
          style={{ width: "20px" }}
          as
        ></img>
        &nbsp;&nbsp; Get Recently Played Tracks&nbsp;&nbsp;
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/800px-Arrow_east.svg.png"
          style={{ width: "20px" }}
          as
        ></img>
        &nbsp;&nbsp; Analyze songs "mood" from features like tempo,
        danceability, energy, etc.
      </div>
    </div>
  );
}
