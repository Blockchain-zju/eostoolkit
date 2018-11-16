import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Card, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";

import dappStyle from "./DappStyle";

// for test
import scatter from "assets/img/scatter.png";

export const Dapp = props => {
  const {
    id,
    name,
    icon,
    abstract,
    classes,
    modalOpen
  } = props;
  return (
    <div className={classes.item} onClick={modalOpen}>
      <Card className={classes.card}>
        <img src={scatter} className={classes.icon}/>
        <div className={classes.info}>
          <div className={classes.name} title={name}>{name}sdfdsfdsfdsf</div>
          <div className={classes.abstract} title={abstract}>{abstract}sdfdsfdsfdsfsdf</div>
        </div>
      </Card>
    </div>
  );
};

Dapp.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  icon: PropTypes.string,
  abstract: PropTypes.string
};

export default withStyles(dappStyle)(Dapp);
