import React from "react";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import "./PlaylistStyle.css";

const Playlists = ({ playlists }) => {
  // console.log(playlists);
  return (
    <div className="playlist-page-container">
      <div className="playlist-page-header">Header</div>

      <div className="playlists-container">
        <PlaylistCard></PlaylistCard>
      </div>
    </div>
  );
};

export default Playlists;
