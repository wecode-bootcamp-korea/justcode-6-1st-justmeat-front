import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import ShopDetails from './ShopDetails/ShopDetails';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Footer from '../components/Footer/Footer';
import Register from './Register/Register';
import Event from './Event/Event';
import ReviewList from '../components/ReviewList/ReviewList';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/details"
          /*"/product?id=:id"*/ element={<ShopDetails />}
        />
        <Route path="/product" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Event />} />
        <Route path="/review" element={<ReviewList />} />{' '}
        {/*수정: /review << 페이지 아니고 컴포넌트*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
