import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  accessToken,
  getCurrentUserProfile,
  getCurrentUserTopArtists,
} from "./Spotify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import TopTracks from "./components/TopTracks/TopTracks";
import TopArtists from "./components/TopArtists/TopArtists";
import Playlists from "./components/Playlists/Playlists";
import Sidebar from "./components/Sidebar/Sidebar";
import RecentlyPlayed from "./components/RecentlyPlayed/RecentlyPlayed";
import axios from "axios";
import ArtistDetails from "./components/ArtistDetails/ArtistDetails";
import PlaylistDetails from "./components/PlaylistDetails/PlaylistDetails";

function App() {
  const [token, settoken] = useState(null);
  const [profile, setprofile] = useState(null);
  const [currentPage, setcurrentPage] = useState("/");
  const [recentlyPlayedSongs, setrecentlyPlayedSongs] = useState([]);
  const [playlists, setplaylists] = useState([]);
  const [artists, setartists] = useState([]);
  const [tracks, settracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getting access token from spotify
        settoken(accessToken);

        // getting user profile info
        const { data } = await getCurrentUserProfile();
        setprofile(data);

        // getting recently played songs
        const recentlyPlayedSongsData = await axios.get(
          "/me/player/recently-played"
        );
        setrecentlyPlayedSongs(recentlyPlayedSongsData.data);

        // getting playlists
        const playlist = await axios.get("/me/playlists");
        setplaylists(playlist.data.items);

        // getting top artists;
        const artist = await axios.get("/me/top/artists");
        setartists(artist.data);

        // getting top trackss
        const track = await axios.get("/me/top/tracks");
        settracks(track.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <div className="App">
          <header className="App-header">
            {!token ? (
              <div className="landing-page">
                <span className="project-name">
                  {" "}
                  Personalized Spotify Account Detail{" "}
                </span>

                <a
                  className="loginToSpotifyLink"
                  href="http://localhost:5000/login"
                >
                  Login To Spotify
                </a>
              </div>
            ) : (
              <>
                <Router>
                  <Sidebar></Sidebar>
                  <div className="current-page">
                    <Switch>
                      <Route exact path="/top-artist">
                        <TopArtists></TopArtists>
                      </Route>
                      <Route exact path="/recently-played">
                        <RecentlyPlayed
                          recentlyPlayedSongs={recentlyPlayedSongs}
                        ></RecentlyPlayed>
                      </Route>

                      <Route exact path="/top-tracks">
                        <TopTracks tracks={tracks}></TopTracks>
                      </Route>

                      <Route exact path="/playlist/:playlistName/:playlistId">
                        <PlaylistDetails></PlaylistDetails>
                      </Route>

                      <Route exact path="/playlists">
                        <Playlists playlists={playlists}></Playlists>
                      </Route>

                      <Route exact path="/artist/:artistName/:artistId">
                        <ArtistDetails></ArtistDetails>
                      </Route>

                      <Route exact path="/">
                        <>
                          {profile && (
                            <UserProfile profile={profile}></UserProfile>
                          )}
                        </>
                      </Route>
                    </Switch>
                  </div>
                </Router>
              </>
            )}
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
