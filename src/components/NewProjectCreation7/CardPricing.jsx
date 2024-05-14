import React from "react";

const styles = {
  Card: {
    top: "311px",
    left: "25px",
    width: "100%",
    height: "102px",
    backgroundColor: "#132A58",
    borderRadius: "12px",
    border: "1px solid #030303",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    marginTop: "20px",
  },
};

const Card = (props) => {
  return <div style={styles.Card}>{props.children}</div>;
};

export default Card;
