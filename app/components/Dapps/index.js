import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import Modal from "@material-ui/core/Modal";

import { createStructuredSelector } from "reselect";
import { makeSelectDapps } from "../../containers/NetworkClient/selectors";
import { loadDapps } from "../../containers/NetworkClient/actions";

import Dapp from "./Dapp";
import dappStyle from "./DappStyle";

class Dapps extends React.Component {

  state = {
    modalOpen: false,
    active: 0
  };

  componentWillMount() {
    this.props.loadDapps();
  }

  modalOpen = (id) => {
    this.setState({
      modalOpen: true,
      active: id
    });
  };

  modalClose = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    const { dapps, classes } = this.props;
    if (dapps.length < 20) {
      for (let i = 0; i < 20; i++) {
        dapps.push(dapps[0]);
      }
    }

    const modalDapp = dapps[this.state.active];
    // TODO: style
    return (
      <div className={classes.market}>
        {dapps.map((item, key) => {
          item.id = key;
          return (
            <Dapp {...item} key={key} modalOpen={this.modalOpen.bind(this, key)}>
            </Dapp>
          );
        })}
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={this.state.modalOpen}
          onClose={this.modalClose}
          className={classes.container}
        >
          {modalDapp ? (
            <div className={classes.modal}>
              <div>{modalDapp.name}</div>
              <div>{modalDapp.icon}</div>
              <div>{modalDapp.abstract}</div>
              <div>{modalDapp.intro}</div>
              <div>{modalDapp.url}</div>
              <div>{modalDapp.author}</div>
              <div>{modalDapp.images}</div>
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dapps: makeSelectDapps()
});

function mapDispatchToProps(dispatch) {
  return {
    loadDapps: () => dispatch(loadDapps())
  };
}

export default compose(
  withStyles(dappStyle),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dapps);
