import React from "react";
import "./PrimaryCardStyle.css";

const PrimayCard = () => {
  return (
    <div className="primary-card-container">
      <div className="primary-card-image-container">
        <img
          className="primary-card-image"
          src="https://i.guim.co.uk/img/media/73ec4373ed4f59ef1a1312176558752a5793529d/0_336_6552_3932/master/6552.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b3a7881444203651628e94863df6c9de"
        />
      </div>

      <div className="primary-card-description"> The WeekEnd</div>
    </div>
  );
};

export default PrimayCard;
