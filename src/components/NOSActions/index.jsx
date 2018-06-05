import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { nosPropTypes } from "@nosplatform/api-functions/es6";

import { injectNOS } from "../../nos";

const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

class NOSActions extends React.Component {
  handleSubmitGetAddress = () => alert("You have clicked button: Get Address");

  handleGetAddress = async () => alert(await this.props.nos.getAddress());
  handleExchangePreview = () =>
    alert("You have clicked button: Exchange preview");

  handleSendTokens = () => alert("You have clicked button: SEND TOKENS");

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h3>Define Exchange Transaction</h3>
        <form className={classes.form} onSubmit={this.handleSubmitGetAddress}>
          <div>
            <label htmlFor="transaction">
              Enter HASH of transaction, <br /> which includes NEP5 tokens to
              exchange
            </label>
            <input id="transction" type="text" />
            <input type="submit" value="Get Transaction" />
          </div>
        </form>
        <br />
        <h3>YOU WILL SEND</h3>
        <form className={classes.form} onSubmit={this.handleExchangePreview}>
          <label htmlFor="tokenSend">
            Select type of NEP5 token to send
            <input id="tokenSend" type="text" />
          </label>
          <br />
          <label htmlFor="tokenValue">
            Enter value of NEP5 tokens to send
            <input id="tokenValue" type="text" />
          </label>
          <br />
          <label htmlFor="tokenGet">
            Select type of NEP5 token to get
            <input id="tokenGet" type="text" />
          </label>
          <br />
          <input type="submit" value="Exchange Transaction Preview" />
        </form>
        <br />
        <h3>YOU WILL GET</h3>
        <button className={classes.button} onClick={this.handleSendTokens}>
          SEND TOKENS
        </button>
      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosPropTypes.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
