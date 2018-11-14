import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h4>
        请先安装Chrome浏览器插件{' '}
        <a href="https://get-scatter.com/" target="new">
          Scatter
        </a>{' '}.
      </h4>
      <h4>
        在你使用EOS区块链之前，请确保已阅读并理解<NavLink to="/governance">EOS治理公约</NavLink>
      </h4>
    </div>
  );
};

export default Home;
