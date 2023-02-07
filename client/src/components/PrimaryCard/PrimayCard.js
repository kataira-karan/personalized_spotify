import React from "react";
import "./PrimaryCardStyle.css";

const PrimayCard = (props) => {
  const { playlist } = props;
  // console.log(playlist);
  return (
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
  );
};

export default PrimayCard;
