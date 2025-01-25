
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from'./components/Header'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Service from './pages/Service';
import Giving from './pages/Giving';
import About from './pages/About';
import FormJemaat from "./components/form/FormJemaat";

import './App.css';
import FormDoa from './components/form/FormDoa';
import RenunganDetail from './components/RenunganDetail';
import KKA from './pages/KKA';
import MembacaDetail from './components/MembacaDetail';
  // "port": "3010",

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/article/:id" element={<RenunganDetail />} />
          <Route path="/membaca/:id" element={<MembacaDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/kka" element={<KKA />} />

          
          <Route path="/giving" element={<Giving />} />
          <Route path="/about" element={<About />} />
          <Route path="/form-jemaat" element={<FormJemaat />} />
          <Route path="/formDoa" element={<FormDoa />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
