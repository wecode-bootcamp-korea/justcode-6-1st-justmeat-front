import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import ProductDetail from './ProductDetail/ProductDetail';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import Footer from '../components/Footer/Footer';
import Register from './Register/Register';
import Event from './Event/Event';
import EventDetail from './Event/EventDetail/EventDetail';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details" /*"/product/:id"*/ element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
