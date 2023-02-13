import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/Button";
import Header from "../Headers/Header";
import TopTrackCard from "../TopTracks/TopTrackCard";
import "./PlaylistDetailsStyle.css";
import Name from "../Name/Name";

const PlaylistDetails = () => {
  const { playlistId } = useParams();
  const [playlistDetails, setplaylistDetails] = useState(null);

  useEffect(() => {
    const fetchPlaylistDetails = async () => {
      // getting playlist details
      const details = await axios.get(`playlists/${playlistId}`);
      setplaylistDetails(details.data);

      console.log(details.data);
    };

    fetchPlaylistDetails();
  }, []);

  return (
    <div className="playlist-details-component">
      {playlistDetails != null ? (
        <>
          {" "}
          <div className="playlist-details">
            <div className="playlist-image-container">
              <img
                className="playlist-image"
                src={
                  playlistDetails.images.length !== 0
                    ? playlistDetails.images[0].url
                    : null
                }
              />
            </div>

            <div className="playlist-details">
              <Name
                text={playlistDetails.name}
                fontWeight="bold"
                fontSize="2rem"
                fontColor="white"
              >
                {" "}
              </Name>
              <span> {playlistDetails.public ? "Public" : "Private"} </span>
              <a href={playlistDetails.external_urls.spotify}>
                <Button
                  backgroundColor="#1db954"
                  borderRadius="2rem"
                  padding="1rem"
                  border="none"
                  fontSize="0.8rem"
                  margin="1rem 0"
                  buttonText="Open Playlist on Spotify"
                ></Button>{" "}
              </a>
            </div>
          </div>
          <div className="playlist-tracks">
            <Header isButton={false} title="Tracks" fontSize="2rem  "></Header>

            {playlistDetails.tracks.items.map((track, index) => {
              return (
                <TopTrackCard track={track.track} key={index}></TopTrackCard>
              );
            })}
          </div>
        </>
      ) : (
        "Loadingg"
      )}
    </div>
  );
};

export default PlaylistDetails;
