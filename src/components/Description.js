import React from "react";
import PropTypes from "prop-types";

import "../styles/Description.css";

const Description = ({ text, text2 }) => (
  <div className="description">

    <p className="description-text">{text}</p>
    <p className="description-text">
      <br></br>
      {text2}
    </p>

  </div>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,

};

export default Description;
