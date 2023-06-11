import React from 'react';
import AppHw from './comps/appHw'
import './App.css';
import AppDate from './comps_date/appDate';
import ShopList from './comps_loop/shopList';
import AppColor from './comp_color/appColor';
import CoinstList from './comps_coints/coinsList';


function App() {
  return (
    <React.Fragment>
      <h1 className='text-danger'></h1>
      <hr />
      <CoinstList />
      <AppColor />
      <ShopList />
      <AppHw />
      <AppDate />
    </React.Fragment>
  );
}

export default App;
