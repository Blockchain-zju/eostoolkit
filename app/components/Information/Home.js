import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h3>Getting started</h3>
      <h4>
        请先安装Chrome浏览器插件{' '}
        <a href="https://get-scatter.com/" target="new">
          Scatter
        </a>{' '}.
      </h4>
      <h4>
        Checkout our{' '}
        <a href="https://eoshelpdesk.zendesk.com" target="new">
          EOS Helpdesk
        </a>{' '}
        to find useful information and tutorials for EOSToolkit and the EOS Network.
      </h4>
      <h4>
        在你使用EOS区块链之前，请确保已阅读并理解<NavLink to="/governance">EOS治理公约</NavLink>
      </h4>
    </div>
  );
};

export default Home;
