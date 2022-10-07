import React from "react";
import PropTypes from "prop-types";

import "../styles/Description.css";

const Description = ({ text, text2 }) => (
  <>
    <div className="description">
      <p className="description-text">{text}</p>

      <div>
      <a href="https://forms.zohopublic.com/ezcharge/form/ComingSoonSha7en/formperma/WTst-oOOOPFSL4r1ZNPqiWlvV0r9J4o2rtRsT-dmfo4?zf_rszfm=1"
      >
        <p className="description-text">
          {text2}
        </p>
      </a>
      </div>
    </div>




  </>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,

};

export default Description;
