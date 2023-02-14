import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import "./UserProfileStyle.css";
import Header from "../Headers/Header";
import PrimayCard from "../PrimaryCard/PrimayCard";
import { miliToMinAndSec } from "../../Spotify";
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
        console.log(playlistsData);

        // getting top artists
        const topTracks = await axios.get("/me/top/artists");

        // getting recently played songs
        const recentlyPlayedSongs = await axios.get(
          "/me/player/recently-played"
        );
        // console.log(recentlyPlayedSongs.data);
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
      {/* <button onClick={logout}>Logout</button> */}
      <UserDetails profile={profile} />

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
                {playlists.map((playlist, index) => {
                  return (
                    <PrimayCard index={index} playlist={playlist}></PrimayCard>
                  );
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
            isButton={true}
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
