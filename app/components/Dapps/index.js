import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Slider from "react-slick";

import withStyles from "@material-ui/core/styles/withStyles";

import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

import {createStructuredSelector} from "reselect";
import {makeSelectDapps} from "../../containers/NetworkClient/selectors";
import {loadDapps} from "../../containers/NetworkClient/actions";

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
    const carouselSettings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const {dapps, classes} = this.props;

    const modalDapp = dapps[this.state.active];
    // clip the images of dapp
    if (modalDapp && modalDapp.images.length > 5) {
      modalDapp.images = modalDapp.images.slice(0, 5);
    }
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
              <div className={classes.infoBox}>
                <img src={modalDapp.icon} className={classes.detailIcon}/>
                <div className={classes.detailName}>{modalDapp.name}</div>
                <div className={classes.detailAuthor}>{modalDapp.author}</div>
                <div className={classes.detailAbst}>{modalDapp.abstract}</div>
                <a href={modalDapp.url} className={classes.link} target="_blank">
                  <Button variant="contained"
                          color="secondary"
                          className={classes.detailBtn}>
                    前往
                  </Button></a>
              </div>
              <hr/>
              <div>
                {modalDapp.images.length > 0 ? (
                  <Slider {...carouselSettings}>
                    {modalDapp.images.map(item => (
                      <img src={item} className={classes.image}/>
                    ))}
                  </Slider>
                ) : null}
              </div>
              <div className={classes.detailInfo} dangerouslySetInnerHTML={{__html: modalDapp.intro}}></div>
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
