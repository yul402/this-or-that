import React from "react";

const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/6.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "-1",
      }}
    ></div>
  );
};

export default Background;
