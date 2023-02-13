import React from "react";
import TopTrackCard from "./TopTrackCard";
import "./TopTracksStyle.css";

const TopTracks = ({ tracks }) => {
  // console.log(tracks);
  return (
    <div className="top-tracks-page-container">
      <div className="top-tracks-page-header">
        <span className="top-tracks-page-title"> Top Tracks</span>
        <div className="top-tracks-filters">
          <span className="top-tracks-filter">All Time</span>
          <span className="top-tracks-filter"> Last 6 Months </span>
          <span className="top-tracks-filter"> Last 4 Weeks </span>
        </div>
      </div>

      <div className="top-tracks">
        {/* <SongDetailsCard song={tracks[0]} index={1}></SongDetailsCard> */}
        {tracks.map((track) => {
          return <TopTrackCard id={track.id} track={track}></TopTrackCard>;
        })}
      </div>
    </div>
  );
};

export default TopTracks;
