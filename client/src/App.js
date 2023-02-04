import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { accessToken, getCurrentUserProfile } from "./Spotify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const [token, settoken] = useState(null);
  const [profile, setprofile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setprofile(data);
        console.log(data);
        settoken(accessToken);
      } catch (error) {
        console.log(error);
      }
      console.log("HElooo");
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
              <Router>
                <Switch>
                  <Route exact path="/top-artist">
                    Top artist
                  </Route>

                  <Route exact path="/top-tracks">
                    Top tracks
                  </Route>

                  <Route exact path="/playlists/:id">
                    Top artist
                  </Route>

                  <Route exact path="/playlists">
                    Playliksts
                  </Route>

                  <Route exact path="/">
                    <>
                      {profile && <UserProfile profile={profile}></UserProfile>}
                    </>
                  </Route>
                </Switch>
              </Router>
            )}
          </header>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
