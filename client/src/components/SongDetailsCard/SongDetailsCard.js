import React from "react";
import { Link } from "react-router-dom";
import "./SongDetailsCardStyle.css";
import { miliToMinAndSec } from "../../Spotify";

const SongDetailsCard = ({ song, index }) => {
  const trackInfo = song.track;

  return (
    <div className="song-details-card-style">
      <div className="song-details-number">{index + 1}</div>
      <div className="song-details-poster-container">
        <img
          className="song-details-poster"
          src={
            trackInfo.album.images.length !== 0
              ? trackInfo.album.images[0].url
              : null
          }
        ></img>
      </div>

      <div className="song-details-container">
        <span className="song-details-song-name">{trackInfo.name} </span>
        <span className="song-details-singer-name">
          {trackInfo.album.artists.map((artist, index) => {
            return (
              <Link to={`/artist/${artist.name}/${artist.id}`} key={index}>
                {" "}
                <span> {artist.name} </span>{" "}
              </Link>
            );
          })}{" "}
        </span>
      </div>

      <div className="song-details-album">{trackInfo.album.name}</div>

      <div className="song-details-duration">
        {miliToMinAndSec(trackInfo.duration_ms)}
      </div>
    </div>
  );
};

export default SongDetailsCard;
