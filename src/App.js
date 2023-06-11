import React from 'react';
import AppHw from './comps/appHw'
import './App.css';
import AppDate from './comps_date/appDate';
import ShopList from './comps_loop/shopList';
import AppColor from './comp_color/appColor';


function App() {
  return (
    <React.Fragment>
      <h1 className='text-danger'></h1>
      <hr />
      <AppColor />
      <ShopList />
      <AppHw />
      <AppDate />
    </React.Fragment>
  );
}

export default App;
