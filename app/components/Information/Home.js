import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h4>
        请先安装EOS桌面钱包{' '}
        <a href="https://get-scatter.com/" target="new">
          Scatter
        </a>{' '}，并保持运行状态。
      </h4>
      <h4>
        在你使用EOS区块链之前，请确保已阅读并理解<NavLink to="/governance">EOS治理公约</NavLink>
      </h4>
    </div>
  );
};

export default Home;
