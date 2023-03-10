import React from "react";
import Button from "../Button/Button";

const Header = (props) => {
  const {
    title,
    color,
    headerWidth,
    padding,
    buttonFunction,
    fontWeight,
    fontSize,
    isButton,
  } = props;

  const headerStyle = {
    display: "flex",
    color: color ? color : "white",
    headerWidth: headerWidth ? headerWidth : "70%",
    justifyContent: "space-between",
    fontSize: fontSize ? fontSize : " 1rem",
    padding: padding ? padding : "1rem",
    fontWeight: fontWeight ? fontWeight : "bold",
  };

  return (
    <section style={headerStyle} className="header-container">
      <span>{title ? title : "Header"}</span>
      {isButton ? (
        <span>
          <Button
            buttonText="See All"
            backgroundColor="transparent"
            borderRadius="5px"
            border="1px solid white"
            padding="0.5rem"
            fontSize="0.8rem"
          ></Button>
        </span>
      ) : null}
    </section>
  );
};

export default Header;
