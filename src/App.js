import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Kitchen from './pages/Kitchen';
import Header from './components/Header';

export default function App() {
  return (
    <Router basename="/clothing-store">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </Router>
  );
}
