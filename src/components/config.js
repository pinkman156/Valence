export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "51d00219190a49e0bfc56014f5acc6d0";
export const redirectUri = "https://valence-app.vercel.app/redirect";
// export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "playlist-read",
  "playlist-read-private",
];
