import React from "react";
import "./UserDetailsStyle.css";

const UserDetails = (props) => {
  const { profile } = props;
  return (
    <div className="userDetails-container">
      <div className="user-profile-image-container">
        <img
          className="user-profile-image"
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxERfeH8CH5Hfr-fdowRXIGzqlilsEzmPzg&usqp=CAU"
        />
      </div>
      <div className="user-details">
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
