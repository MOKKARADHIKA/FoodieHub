import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import AboutUs from './AboutUs';
import Cart from './Cart';
import Fruits from './Fruits';
import Chocolates from './Chocolates';
import IceCreams from './IceCreams';
import MilkItems from './MilkItems';
import Orders from './Orders';
import RegisterForm from './RegisterForm';
import Login from './Login';
import Sweets from './Sweets';

import Navbar from './NavBar';  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchResults from './SearchResults';
import NavBar from './NavBar';
import ContactUs from './ContactUs';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />   

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonVeg" element={<NonVeg />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/icecreams" element={<IceCreams />} />
          <Route path="/milkitems" element={<MilkItems />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<RegisterForm />} />
            <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
