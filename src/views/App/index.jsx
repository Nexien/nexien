import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import Header from "./../../components/Header";
import NOSActions from "./../../components/NOSActions";

const styles = {
  "@import": "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
  "@global html, body": {
    fontFamily: "Source Sans Pro",
    margin: 0,
    padding: 0,
    backgroundColor: "#ffffff"
  },
  App: {
    textAlign: "left"
  },
  intro: {
    fontSize: "medium"
  },
  lineBreak: {
    width: "75%",
    borderTop: "1px solid #333333",
    margin: "32px auto"
  }
};

const App = ({ classes }) => (
  <div className={classes.App}>
    <Header title="Nexien nOS dApp for exchanging coins" />
    <p className={classes.intro}>
      dApp enables exchanging coins peer to peer with ratios that are not on
      exchanges!
    </p>
    <p className={classes.intro}>
      For example a dogecon/garlicon ratio doesn&#96;t exist on any exchange
    </p>
    <p className={classes.intro}>
      but you can trade this ratio directly with someone else in this dApp.
    </p>
    <p className={classes.intro}>
      You can trade all unexisting NP5 token ratios in this dApp.
    </p>
    <hr className={classes.lineBreak} />
    <NOSActions />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);
