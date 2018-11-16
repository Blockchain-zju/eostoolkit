import { defaultFont, container, containerFluid, primaryColor } from "assets/jss/material-dashboard-pro-react";

const dappStyle = {
  market: {
    marginTop: 20
  },
  item: {
    width: "25%",
    cursor: "pointer",
    display: "inline-block",
    padding: 10
  },
  card: {
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    padding: "10px 18px"
  },
  icon: {
    width: 40,
    height: 40,
    position: "absolute",
    marginTop: 6
  },
  info: {
    margin: "2px 0 0 55px"
  },
  name: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: 14,
    fontWeight: "bold"
  },
  abstract: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: 12
  },
  container: {
    display: "block"
  },
  modal: {
    width: 680,
    margin: "100px auto",
    background: "white",
    padding: 20
  }
};

export default dappStyle;
