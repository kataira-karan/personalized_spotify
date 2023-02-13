import React from "react";

const Button = (props) => {
  const {
    borderRadius,
    padding,
    color,
    backgroundColor,
    fontSize,
    buttonText,
    border,
    fontWeight,
    onClickFunction,
    margin,
  } = props;

  const buttonStyle = {
    borderRadius: borderRadius ? borderRadius : "5px",
    padding: padding ? padding : "1rem",
    color: color ? color : "white",
    backgroundColor: backgroundColor ? backgroundColor : "black",
    fontSize: fontSize ? fontSize : "1rem",
    border: border ? border : "1px solid black",
    cursor: "pointer",
    fontWeight: fontWeight ? fontWeight : 100,
    margin: margin ? margin : null,
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClickFunction ? onClickFunction : null}
    >
      {" "}
      {buttonText ? buttonText : "Click Me"}{" "}
    </button>
  );
};

export default Button;
