import React from "react";
import Header from "../Headers/Header";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import PrimayCard from "../PrimaryCard/PrimayCard";
import "./PlaylistStyle.css";

const Playlists = ({ playlists }) => {
  console.log(playlists);
  return (
    <div className="playlist-page-container">
      <div className="playlist-page-header">
        <Header title="Your Playlists" fontSize="4rem"></Header>
      </div>

      <div className="playlists-container">
        {playlists.map((playlist) => {
          return <PrimayCard playlist={playlist}></PrimayCard>;
        })}
      </div>
    </div>
  );
};

export default Playlists;
