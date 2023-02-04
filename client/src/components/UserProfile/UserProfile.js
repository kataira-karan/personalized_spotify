import React from "react";
import UserDetails from "./UserDetails";
import "./UserProfileStyle.css";
import Header from "../Headers/Header";
import PrimayCard from "../PrimaryCard/PrimayCard";

const UserProfile = () => {
  const seeAllTopTracks = () => {
    console.log("Top Tracks");
  };

  return (
    <>
      <div className="user-profile-container">
        <div className="nav-container">
          <ul className="nav-container-list">
            <li className="nav-item logo-item">
              <img
                className="spotify-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
              />{" "}
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
          <UserDetails />
        </div>
      </div>

      <div className="user-track-list">
        <Header
          title="Top Artists"
          headerWidth="90%"
          padding="1rem"
          fontSize="1.2rem"
          color="white"
          buttonFunction={seeAllTopTracks}
        ></Header>

        <div className="top-artists">
          <PrimayCard></PrimayCard>
          <PrimayCard></PrimayCard>
          <PrimayCard></PrimayCard>
        </div>

        <Header
          title="Top Tracks"
          headerWidth="90%"
          padding="1rem"
          fontSize="1.2rem"
          color="white"
          buttonFunction={seeAllTopTracks}
        ></Header>
      </div>
    </>
  );
};

export default UserProfile;
