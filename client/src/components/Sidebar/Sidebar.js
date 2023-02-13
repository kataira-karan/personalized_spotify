import React, { useState } from "react";
import "../UserProfile/UserProfileStyle.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [currentPage, setcurrentPage] = useState("userProfile");

  const handlePage = (e) => {
    let links = document.querySelectorAll(".detail-list-item");
    for (let i = 0; i < links.length; i++) {
      let currentLink = links[i];
      if (currentLink.classList.contains("active")) {
        currentLink.classList.remove("active");
        currentLink.ariaCurrent = "";
      }

      e.target.classList.add("active");
      e.target.ariaCurrent = "page";
    }
  };

  return (
    <div className="nav-container">
      <ul className="nav-container-list">
        <li className="nav-item logo-item">
          <a href="spotify:user:31exs7adkcfqiivz5f2o3q33nlse">
            <img
              className="spotify-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
            />{" "}
          </a>
        </li>

        <ul className="detail-list">
          <Link to="/">
            <li
              className="detail-list-item active"
              onClick={(e) => handlePage(e)}
            >
              {" "}
              Profile{" "}
            </li>
          </Link>

          {/* <Link to="/top-artist" className="side-bar-link">
            <li className="detail-list-item" onClick={(e) => handlePage(e)}>
              {" "}
              Top artist{" "}
            </li>
          </Link> */}

          <Link to="/top-tracks" className="side-bar-link">
            <li className="detail-list-item" onClick={(e) => handlePage(e)}>
              {" "}
              top-tracks{" "}
            </li>
          </Link>

          <Link to="/playlists" className="side-bar-link">
            <li className="detail-list-item" onClick={(e) => handlePage(e)}>
              {" "}
              Playlists{" "}
            </li>
          </Link>

          <Link to="/recently-played" className="side-bar-link">
            <li className="detail-list-item" onClick={(e) => handlePage(e)}>
              {" "}
              Recently Played{" "}
            </li>
          </Link>
        </ul>

        <li className="list-item git-item"> MY Git</li>
      </ul>
    </div>
  );
};

export default Sidebar;
