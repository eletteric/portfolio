import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div className="absoluteWrapper">
      <h1 style={{ paddingTop: "100px" }}>404 - Page not found :(</h1>
      <p>
        {" "}
        <NavLink to="/">Back to Homepage</NavLink>
      </p>
    </div>
  );
};

export default NotFound;