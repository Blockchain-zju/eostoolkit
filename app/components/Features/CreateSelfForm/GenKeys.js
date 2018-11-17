import React from 'react';
import ecc from 'eosjs-ecc';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles'

import Button from '@material-ui/core/Button'
import Danger from 'components/Typography/Danger.jsx';

class GetKeysObject extends React.Component {
  state = {
    privKey: '',
  }
  genKeypairs = async () => {
    const privKey = await ecc.randomKey();
    this.setState({
      privKey
    })
  };

  componentDidMount() {
    this.genKeypairs()
  }

  render() {
    const {classes} = this.props;
    const {privKey} = this.state;
    return (
      <div>
        <div>
          <Danger>
            离线保存
          </Danger>
          <div className={classes.info}>建议抄写或打印私钥后放置在安全地点保存。</div>
          <Danger>
            请勿使用网络传输
          </Danger>
          <div className={classes.info}>请勿通过网络工具传输私钥，例如用微信发送到电脑。一旦被黑客获取将造成不可挽回的资产损失。</div>
          {privKey ? (
            <div className={classes.keyBox}>
              <div>
                <div>Public Key</div>
                <div className={classes.key}>{ecc.privateToPublic(privKey)}</div>
              </div>
              <div style={{marginTop: 10}}>
                <div>Private Key</div>
                <div className={classes.key}> {privKey}</div>
              </div>
            </div>
          ) : null}
        </div>
        <Button variant="contained" color="secondary" className={classes.btn} onClick={this.genKeypairs}>重新生成</Button>
      </div>
    )
  }
}

export default withStyles(styles)(GetKeysObject)
