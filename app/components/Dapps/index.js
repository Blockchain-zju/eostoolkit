import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';

import {createStructuredSelector} from 'reselect';
import {makeSelectDapps} from "../../containers/NetworkClient/selectors";

import Card from 'components/Card/Card';
import CardIcon from 'components/Card/CardIcon';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';

import Dapp from './Dapp';

const Dapps = props => {
  const {dapps} = props;
  console.log(dapps)
  return (
    <div>
      <Card>
        <CardHeader icon>
          <CardIcon color="success"></CardIcon>
        </CardHeader>
        <CardBody>
          Hello world
        </CardBody>
      </Card>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  dapps: makeSelectDapps()
});

function mapDispatchToProps() {
  return {}
}

export default compose(
  withStyles(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dapps)
