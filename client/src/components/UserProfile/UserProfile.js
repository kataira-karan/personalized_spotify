import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import "./UserProfileStyle.css";
import Header from "../Headers/Header";
import PrimayCard from "../PrimaryCard/PrimayCard";
import { getCurrentUserTopArtists, getTopArtists } from "../../Spotify";
import Button from "../Button/Button";
import { logout } from "../../Spotify";
import axios from "axios";
import SongContainer from "../SongContainer/SongContainer";

const UserProfile = (props) => {
  const { profile } = props;
  // console.log(profile);
  const [playlists, setplaylists] = useState([]);
  const [recentlyPlayedSongs, setrecentlyPlayedSongs] = useState([]);

  useEffect(() => {
    const fetchCurrentUserTopArtist = async () => {
      try {
        //getting user's playlist
        const playlistsData = await axios.get("/me/playlists");
        // console.log(playlistsData.data);
        setplaylists(playlistsData.data.items);

        // getting top artists
        const topTracks = await axios.get("/me/top/artists");

        // getting recently played songs
        const recentlyPlayedSongs = await axios.get(
          "/me/player/recently-played"
        );
        console.log(recentlyPlayedSongs.data);
        setrecentlyPlayedSongs(recentlyPlayedSongs.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentUserTopArtist();
  }, []);

  const seeAllTopTracks = () => {
    console.log("Top Tracks");
  };

  return (
    <div className="user-profile-section">
      <button onClick={logout}>Logout</button>
      <div className="user-profile-container">
        <div className="nav-container">
          <ul className="nav-container-list">
            <li className="nav-item logo-item">
              <a href="spotify:user:31exs7adkcfqiivz5f2o3q33nlse">
                <img
                  className="spotify-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
                />{" "}
              </a>
            </li>

            <ul className="detail-list">
              <li className="detail-list-item"> Profile </li>
              <li className="detail-list-item"> Top artist </li>
              <li className="detail-list-item"> Top Tracks </li>
              <li className="detail-list-item"> Recents </li>
              <li className="detail-list-item"> playlists </li>
            </ul>

            <li className="list-item git-item"> MY Git</li>
          </ul>
        </div>
        <div className="profile-container">
          <UserDetails profile={profile} />
        </div>
      </div>

      <div className="user-track-list">
        <div className="artists-container">
          <Header
            title="Playlists"
            headerWidth="0%"
            padding="1rem"
            fontSize="1.2rem"
            color="white"
            buttonFunction={seeAllTopTracks}
          ></Header>

          <div className="top-artists">
            {playlists.length === 0 ? (
              <>No playlist to display</>
            ) : (
              <>
                {" "}
                {playlists.map((playlist) => {
                  return <PrimayCard playlist={playlist}></PrimayCard>;
                })}{" "}
              </>
            )}
          </div>
        </div>

        <div className="top-songs-container">
          <Header
            title="Recenlty Played Songs"
            headerWidth="90%"
            padding="1rem"
            fontSize="1.2rem"
            color="white"
            buttonFunction={seeAllTopTracks}
          ></Header>
          <div className="top-songs">
            {recentlyPlayedSongs.length === 0 ? (
              <>No recentlyPlayedSongs to display</>
            ) : (
              <>
                {" "}
                {recentlyPlayedSongs.map((song) => {
                  return <SongContainer song={song}></SongContainer>;
                })}{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
