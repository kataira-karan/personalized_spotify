import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArtistDetailsStyle.css";
import { Link } from "react-router-dom";
import TopTrackCard from "../TopTracks/TopTrackCard";
import Header from "../Headers/Header";
import Button from "../Button/Button";
import Name from "../Name/Name";
const ArtistDetails = () => {
  const { artistId } = useParams();

  const [artistDetails, setartistDetails] = useState(null);
  const [artistTopTracks, setartistTopTracks] = useState([]);

  useEffect(() => {
    const fetchArtistDetails = async () => {
      const artistDetails = await axios.get(`/artists/${artistId}/`);
      console.log(artistDetails.data);
      setartistDetails(artistDetails.data);

      //  getting artist's top tracks
      const artistTopTracks = await axios.get(
        `/artists/${artistId}/top-tracks?market=CA`
      );
      setartistTopTracks(artistTopTracks.data.tracks);
      console.log(artistTopTracks.data.tracks);
    };

    fetchArtistDetails();
    // get artist detail
  }, [artistId]);

  return (
    <div className="artist-details-container">
      {artistDetails != null ? (
        <>
          {" "}
          <div className="artist-details">
            <div className="artist-image-container">
              <picture>
                <source
                  srcSet={
                    artistDetails.images ? artistDetails.images[0].url : null
                  }
                  media="(min-width:1000px)"
                ></source>
                <source
                  srcSet={
                    artistDetails.images ? artistDetails.images[1].url : null
                  }
                  media="(min-width:700px)"
                ></source>
                <source
                  srcSet={
                    artistDetails.images ? artistDetails.images[2].url : null
                  }
                  media="(min-width:650px)"
                ></source>
                <img
                  className="artist-image"
                  src={
                    artistDetails.images ? artistDetails.images[0].url : null
                  }
                ></img>
              </picture>
            </div>
            <Name
              text={artistDetails.name}
              fontWeight="bold"
              fontSize="2rem"
              fontColor="white"
            >
              {" "}
            </Name>
            <a
              href={
                artistDetails.external_urls
                  ? artistDetails.external_urls.spotify
                  : null
              }
            ></a>{" "}
            <span>Followers : {artistDetails.followers.total}</span>
            <Button
              backgroundColor="#1db954"
              borderRadius="2rem"
              padding="1rem"
              border="none"
              fontSize="0.8rem"
              margin="1rem 0"
              buttonText="Open Artist on Spotify"
            ></Button>{" "}
            <span>
              Gerns :{" "}
              {artistDetails.genres.map((genre, index) => {
                return <span key={index}> {genre} </span>;
              })}
            </span>
          </div>
          <div className="artists-top-tracks">
            <Header
              title={`${artistDetails.name}'s Top Tracks`}
              isButton={false}
              fontSize="2rem"
            ></Header>
            {artistTopTracks.length !== 0
              ? artistTopTracks.map((track, index) => {
                  return (
                    <TopTrackCard track={track} key={index}></TopTrackCard>
                  );
                })
              : null}
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default ArtistDetails;
