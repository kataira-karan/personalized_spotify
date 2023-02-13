import React from "react";
import "./SongStyle.css";
import { miliToMinAndSec } from "../../Spotify";
import { Link } from "react-router-dom";

const SongContainer = ({ song }) => {
  console.log(song);
  return (
    <Link>
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
              return (
                <Link to={`/artist/${artist.name}/${artist.id}`}>
                  {" "}
                  <span> {artist.name} </span>{" "}
                </Link>
              );
            })}
            {/* <span> Album Name</span> */}
          </div>
        </div>

        <div className="song-length">
          {miliToMinAndSec(song.track.duration_ms)}
        </div>
      </div>
    </Link>
  );
};

export default SongContainer;
