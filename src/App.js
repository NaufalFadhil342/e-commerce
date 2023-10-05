import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth';
import Footer from './layouts/footer';
import Navbar from './layouts/navbar';
import Home from './pages/home';
import NotFound from './pages/notFound';
import SignIn from './pages/signIn';
import Products from './pages/products';
import Matic from './layouts/productsData/matic';
import Sport from './layouts/productsData/sport';
import Cub from './layouts/productsData/cub';
import Ev from './layouts/productsData/ev';

function App() {
  return (
    <Router>
      <Auth />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products" element={<Products />}>
          <Route path="matic" element={<Matic />} />
          <Route path="sport" element={<Sport />} />
          <Route path="cub" element={<Cub />} />
          <Route path="ev" element={<Ev />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
