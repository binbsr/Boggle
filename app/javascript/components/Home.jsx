import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="container">
      <h1 className="display-4 text-uppercase text-center">Boggling with words</h1>
      <hr className="my-4" />      
      <Link
        to="/about"
        className="btn btn-primary"
        role="button"
      >
        About Me
    </Link>
  </div>
);