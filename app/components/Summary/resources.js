import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from 'assets/jss/tableStyle';

function ResourcesTable({ ...props }) {
  const { classes, account } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {account ? (
          <TableBody>
            <TableRow className={`${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <h6>EOS</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account.balances.find(b => b.account === 'eosio.token')
                  ? account.balances.find(b => b.account === 'eosio.token').balance
                  : 'None'}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h6>RAM</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account.ram_usage} bytes used<br />
                {account.ram_quota} bytes owned
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h6>CPU</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account.total_resources.cpu_weight}
                <br />({Number((account.cpu_limit.used / account.cpu_limit.max) * 100).toFixed(2)} % used)
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h6>NET</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account.total_resources.net_weight}
                <br />({Number((account.net_limit.used / account.net_limit.max) * 100).toFixed(2)} % used)
              </TableCell>
              <TableCell className={classes.tableCell}>
                <h6>REFUNDING</h6>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {account && account.refund_request ? (
                  <span>
                    CPU: {account.refund_request.cpu_amount}
                    <br />NET: {account.refund_request.net_amount}
                  </span>
                ) : (
                  <span>None</span>
                )}
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <h6>Tokens</h6>
              </TableCell>
              <TableCell className={classes.tableCell} colSpan={9}>
                <h6>{account.balances.map(bal => bal.balance).join(', ')}</h6>
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            <TableRow className={`${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <h6>请点击左侧菜单的“登录”加载账户，以便显示其余额和资源使用量</h6>
              </TableCell>
            </TableRow>
            <TableRow className={`${classes.tableStripedRow} ${classes.tableRowHover}`}>
              <TableCell className={classes.tableCell}>
                <p>
                  如果你的账户信息仍未显示，可能是网络节点出现异常。请点击左侧菜单的“切换网络”选择一个可用的节点。
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </div>
  );
}

export default withStyles(tableStyle)(ResourcesTable);
