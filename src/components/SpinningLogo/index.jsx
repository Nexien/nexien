import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import nexienLogo from "./../../assets/Nexien.png";

const styles = {
  logoContainer: {
    display: "block",
    // display: "none",
    maxWidth: "200px",
    margin: "32px auto",
    position: "relative"
  },
  nexienLogo: {
    animation: "nOS-logo-spin 3s linear",
    width: "100%"
  },
  "@keyframes nOS-logo-spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(180deg)" }
  }
};

const SpinningLogo = ({ classes }) => (
  <div className={classes.logoContainer}>
    <img
      src={nexienLogo}
      className={classes.nexienLogo}
      alt="Nexien logo"
      key="nexienLogo"
    />
  </div>
);

SpinningLogo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SpinningLogo);
