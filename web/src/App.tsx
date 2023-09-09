import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SignIn} from './pages/signIn';
import Header from './components/layoutWrapper/Header';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
