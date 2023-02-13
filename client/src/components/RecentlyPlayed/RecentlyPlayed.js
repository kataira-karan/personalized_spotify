import { React, useEffect, useState } from "react";
import SongDetailsCard from "../SongDetailsCard/SongDetailsCard";
import "./RecentlyPlayedStyle.css";
const RecentlyPlayed = ({ recentlyPlayedSongs }) => {
  console.log(recentlyPlayedSongs);

  const { items } = recentlyPlayedSongs;

  useEffect(() => {
    // console.log(items);
  }, []);

  return (
    <div className="recently-played-songs-container">
      <section className="recenlty-played-songs-header">
        <div className="recenlty-played-songs-header-image-container">
          <img
            className="recenlty-played-songs-header-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flat_restart_icon.svg/1200px-Flat_restart_icon.svg.png"
          ></img>
        </div>

        <div className="recenlty-played-songs-header-details">
          <span> Playlist </span>
          <span className="recenlty-played-songs-header-title">
            {" "}
            Recently Played Songs
          </span>
          <span>Karan Kataria || 8 Songs</span>
        </div>
      </section>

      <section className="recenly-played-songs">
        {items
          ? items.map((song, index) => {
              return (
                <SongDetailsCard
                  song={song}
                  key={index}
                  index={index}
                ></SongDetailsCard>
              );
            })
          : "Loading"}
      </section>
    </div>
  );
};

export default RecentlyPlayed;
