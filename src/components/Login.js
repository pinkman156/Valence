import React, { Component } from "react";

import hash from "./hash";

import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import NavBar from "./Navbar";
import Footer from "./Footer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.props.setToken(_token);
    }
  }

  render() {
    return (
      <div className="loginpage">
        <h1 style={{ marginRight: "7%" }}>Valence</h1>
        <h2>Judges your mood according to your music taste</h2>
        <div className="logbtn">
          {!this.state.token && (
            <a
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}

          {!this.state.token && (
            <a className="login" onClick={() => this.props.setToken("Demo")}>
              View Demo
            </a>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Login;
