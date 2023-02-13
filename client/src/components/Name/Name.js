import React from "react";

const Name = (props) => {
  const { text, fontWeight, fontSize, fontColor, padding, margin } = props;

  const nameStyle = {
    fontWeight: fontWeight ? fontWeight : 300,
    fontSize: fontSize ? fontSize : "1rem",
    fontColor: fontColor ? fontColor : "black",
    padding: padding ? padding : "0rem",
    margin: margin ? margin : "0rem",
  };

  return <span style={nameStyle}> {text ? text : "Name"} </span>;
};

export default Name;
