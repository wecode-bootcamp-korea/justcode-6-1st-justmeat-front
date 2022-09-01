import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import ItemDetails from './Item/ItemDetails';
import ShopItems from './Item/ShopItems';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" element={<ItemDetails />} />
        <Route path="/shop" element={<ShopItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
