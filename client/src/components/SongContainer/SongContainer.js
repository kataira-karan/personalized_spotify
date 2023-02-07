import React from "react";
import "./SongStyle.css";

const SongContainer = ({ song }) => {
  console.log(song);
  return (
    <div className="song-container">
      <div className="song-poster-container">
        <img
          className="song-poster"
          src={
            song.track.album.images.length != 0
              ? song.track.album.images[0].url
              : null
          }
        ></img>
      </div>

      <div className="song-info">
        <span className="song-name"> {song.track.name} </span>

        <div className="album-details">
          {song.track.artists.map((artist) => {
            return <span> {artist.name} </span>;
          })}
          {/* <span> Album Name</span> */}
        </div>
      </div>

      <div className="song-length">3:23</div>
    </div>
  );
};

export default SongContainer;
