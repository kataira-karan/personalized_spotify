import React from "react";
import Button from "../Button/Button";
import "./UserDetailsStyle.css";
import { logout } from "../../Spotify";
const UserDetails = (props) => {
  const { profile } = props;
  return (
    <div className="userDetails-container">
      <div className="user-profile-image-container">
        <img
          className="user-profile-image"
          src={
            profile.images.length != 0
              ? profile.images[0].url
              : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png "
          }
        />
      </div>
      <div className="user-details">
        <div className="logout-button">
          <Button
            backgroundColor="#1db954"
            color="black"
            border="none"
            fontWeight="bold"
            buttonText="Logout"
            onClickFunction={logout}
          >
            {" "}
            Logout{" "}
          </Button>
        </div>

        <span className="profile"> Profile</span>
        <span className="user-name"> {profile.display_name} </span>
        <div className="followers-following-details">
          <div className="followers-container">
            <span className="followers-container-value">
              {profile.followers.total}
            </span>
            <span className="followers-container-title">followers</span>
          </div>
          <div className="followers-container">
            <span className="followers-container-value">2.3</span>
            <span className="followers-container-title">following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
