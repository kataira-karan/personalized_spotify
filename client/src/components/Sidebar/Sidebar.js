import React, { useState, useEffect } from "react";
import "../UserProfile/UserProfileStyle.css";
import { Link } from "react-router-dom";
import { gsap, Expo } from "gsap";

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

  useEffect(() => {
    var navTimeLine = gsap.timeline();
    navTimeLine.fromTo(".nav-container", { x: -100 }, { x: 0, duration: 1 });
    navTimeLine.fromTo(".spotify-logo", { x: -130 }, { x: 0, duration: 1 });
    navTimeLine.fromTo(
      ".side-bar-link",
      { x: -150 },
      {
        x: 0,
        duration: 0.5,
        stagger: 1,
      }
    );
  }, []);

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

        <ul className="detail-list ">
          <Link to="/">
            <li
              className="side-bar-link detail-list-item active"
              onClick={(e) => handlePage(e)}
            >
              {" "}
              Profile{" "}
            </li>
          </Link>

          <Link to="/top-tracks">
            <li
              className="side-bar-link  detail-list-item"
              onClick={(e) => handlePage(e)}
            >
              {" "}
              top-tracks{" "}
            </li>
          </Link>

          <Link to="/playlists">
            <li
              className=" side-bar-link  detail-list-item"
              onClick={(e) => handlePage(e)}
            >
              {" "}
              Playlists{" "}
            </li>
          </Link>

          <Link to="/recently-played">
            <li
              className=" side-bar-link detail-list-item"
              onClick={(e) => handlePage(e)}
            >
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
