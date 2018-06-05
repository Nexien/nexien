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

  handleSubmitGetAddress(e){
    alert("You have clicked button: Get Address");
    e.preventDefault();
  }

  handleExchangePreview(e){
    alert("You have clicked button: Excange preview");
    e.preventDefault();
  }

  handleSendTokens(e){
    alert("You have clicked button: SEND TOKENS");
    e.preventDefault();
  }

  handleGetAddress = async () => alert(await this.props.nos.getAddress());

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h3>Define Exchange Transaction</h3>
        <form className={classes.form} onSubmit={this.handleSubmitGetAddress}>
          <div>
            <label>Enter HASH of transaction, <br /> which includes NEP5 tokens to exchange </label>
            <input type="text" ref="transaction" />
            <input type="submit" value="Get Address" />
          </div>
        </form> <br />
        <h3>YOU WILL SEND</h3>
        <form className={classes.form} onSubmit={this.handleExchangePreview}>
          <div>
            <label>Select type of NEP5 token to send </label>
            <input type="text" ref="send" /> <br />
            <label>Enter value of NEP5 tokens </label>
            <input type="text" ref="value" /> <br />
            <label>Select type of NEP5 token to get </label>
            <input type="text" ref="value" /> <br />
            <input type="submit" value="Exchange Transaction Preview" />
          </div>
        </form>
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
