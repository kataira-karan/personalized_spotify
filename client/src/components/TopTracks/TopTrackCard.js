import React from "react";
import { Link } from "react-router-dom";
import { miliToMinAndSec } from "../../Spotify";

const TopTrackCard = ({ track }) => {
  return (
    <div className="top-track-card-container">
      <div className="top-track-image-container">
        <img
          className="top-track-image"
          src={
            track.album.images.length !== 0 ? track.album.images[0].url : null
          }
        />
      </div>

      <div className="top-track-info">
        <span>
          {" "}
          {track.name} {track.explicit ? "E" : null}{" "}
        </span>
        <span className="top-track-artist">
          {" "}
          {track.artists.length !== 0
            ? track.artists.map((artist, index) => {
                return (
                  <Link
                    key={index}
                    to={`/artist/${artist.name}/${artist.id}`}
                    className="top-track-artist-name"
                  >
                    {" "}
                    {artist.name}{" "}
                  </Link>
                );
              })
            : null}{" "}
        </span>
      </div>

      <div className="top-track-length">
        {miliToMinAndSec(track.duration_ms)}
      </div>
    </div>
  );
};

export default TopTrackCard;
