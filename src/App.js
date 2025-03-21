import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Kitchen from './pages/Kitchen';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/clothing-store/" element={<Home />} />
        <Route path="/clothing-store/shirts" element={<Shirts />} />
        <Route path="/clothing-store/pants" element={<Pants />} />
        <Route path="/clothing-store/kitchen" element={<Kitchen />} />
      </Routes>
    </Router>
  );
}
