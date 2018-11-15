import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import { createStructuredSelector } from "reselect";
import { makeSelectDapps } from "../../containers/NetworkClient/selectors";
import { loadDapps } from "../../containers/NetworkClient/actions";

import Card from "components/Card/Card";
import CardIcon from "components/Card/CardIcon";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

import Dapp from "./Dapp";

class Dapps extends React.Component {

  componentDidMount() {
    this.props.loadDapps();
  }

  render() {
    const { dapps } = this.props;
    // TODO: style
    return (
      <div>
        <Card>
          <CardHeader icon>
            <CardIcon color="success"></CardIcon>
          </CardHeader>
          <CardBody>
            {dapps.map(item => (
              <div>
                {item.name}
                {item.abstract}
              </div>
            ))}
          </CardBody>
        </Card>
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
  withStyles(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dapps);
