import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Register from './Register/Register';
import Event from './Event/Event';
import Review from '../components/Review/Review';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Event />} />
        <Route path="/review" element={<Review />} />{' '}
        {/*수정: /review << 페이지 아니고 컴포넌트*/}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
