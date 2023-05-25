import React from "react";
import "../CSS/writings.css";

const NoMatch = () => {
  return (
    <div style={{ margin: "3rem auto", width: "60rem" }} className="writings">
      <h1>Error: This Page Does Not Exist!</h1>
      <img
        style={{ width: "30rem" }}
        src="../photos/error_404/Oops! 404 Error with a broken robot-pana.png"
        alt="Error 404 image"
      />
      <p style={{ textAlign: "center" }}>
        Try navigating back to the home page and try again : )
      </p>
    </div>
  );
};

export default NoMatch;
