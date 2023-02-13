import React from "react";
import "./PrimaryCardStyle.css";
import { Link } from "react-router-dom";
import { miliToMinAndSec } from "../../Spotify";

const PrimayCard = (props) => {
  const { playlist } = props;
  console.log(playlist);
  return (
    <Link to={`playlist/${playlist.name}/${playlist.id}`}>
      <div className="primary-card-container">
        <div className="primary-card-image-container">
          <img
            className="primary-card-image"
            src={playlist.images.length != 0 ? playlist.images[0].url : null}
            alt="playlist"
          />
        </div>

        <div className="primary-card-description">{playlist.name}</div>
      </div>
    </Link>
  );
};

export default PrimayCard;
