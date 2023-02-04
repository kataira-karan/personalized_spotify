import React from "react";
import "./UserDetailsStyle.css";

const UserDetails = () => {
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
        <span className="user-name"> Karan Kataria </span>
        <div className="followers-following-details">
          <div className="followers-container">
            <span className="followers-container-value">1.3</span>
            <span className="followers-container-title">followers</span>
          </div>
          <div className="followers-container">
            <span className="followers-container-value">2.3</span>
            <span className="followers-container-title">followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
