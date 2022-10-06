import React from "react";
import PropTypes from "prop-types";

import "../styles/Description.css";

const Description = ({ text, text2 }) => (
  <>
    <div className="description">
      <p className="description-text">{text}</p>
    </div>

    <div className="description">
      <a href="https://forms.zohopublic.com/ezcharge/form/ComingSoonSha7en/formperma/WTst-oOOOPFSL4r1ZNPqiWlvV0r9J4o2rtRsT-dmfo4?zf_rszfm=1"
      >
        <p className="description-text">
          <br></br><br></br><br></br>
          {text2}
        </p>
      </a>


    </div>
  </>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,

};

export default Description;
