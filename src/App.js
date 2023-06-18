// import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppHw from './comps_hw/appHw';
import AppRoutes from './comps_hw/appRouters';
import Coins from './coins/coins';
// import AppRoutes from './comps_routes/appRoutes';

function App() {
  return (
    <React.Fragment>
      <AppRoutes />
      {/* <Coins /> */}
    </React.Fragment>
  );
}

export default App;