import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn} from './pages/signIn';
import { Dashboard } from './pages/dashboard';
import { Stories } from './pages/stories';
import { Products } from './pages/products';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
