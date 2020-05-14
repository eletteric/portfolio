import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";


const NotFound = (props) => {
  return (
    <div>
<h1>404 - Page not found :(</h1>
<p>              <NavLink to="/">Back to Homepage</NavLink>
</p>
    </div>
  )
};

export default NotFound;
