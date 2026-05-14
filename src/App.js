import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import News from './pages/News';
import Service from './pages/Service';
import Giving from './pages/Giving';
import About from './pages/About';
import KKA from './pages/KKA';
import CerdasBangsa from './pages/CerdasBangsa';

import FormJemaat from "./components/form/FormJemaat";
import FormDoa from './components/form/FormDoa';
import FormBaptisan from './components/form/FormBaptisan';
import FormKonseling from './components/form/FormKonseling';
import FormPenyerahanAnak from './components/form/FormPenyerahanAnak';
import FormNikah from './components/form/FormNikah';
import FormPelayan from './components/form/FormPelayan';
import FormPemberkatanRumah from './components/form/FormPemberkatanRumah';

import RenunganDetail from './components/RenunganDetail';
import MembacaDetail from './components/MembacaDetail';
import KesaksianDetail from './components/KesaksianDetail';

import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-white overflow-hidden">
      

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />

            <Route path="/article/:id" element={<RenunganDetail />} />
            <Route path="/membaca/:id" element={<MembacaDetail />} />
            <Route path="/kesaksian/:id" element={<KesaksianDetail />} />

            <Route path="/service" element={<Service />} />
            <Route path="/kka" element={<KKA />} />
            <Route path="/cerdasbangsa" element={<CerdasBangsa />} />

            <Route path="/giving" element={<Giving />} />
            <Route path="/about" element={<About />} />

            <Route path="/form-jemaat" element={<FormJemaat />} />
            <Route
              path="/form-penyerahan-anak"
              element={<FormPenyerahanAnak />}
            />
            <Route path="/form-nikah" element={<FormNikah />} />
            <Route path="/form-pelayan" element={<FormPelayan />} />
            <Route
              path="/form-pemberkatan-rumah"
              element={<FormPemberkatanRumah />}
            />

            <Route path="/formDoa" element={<FormDoa />} />
            <Route path="/formBaptisan" element={<FormBaptisan />} />
            <Route path="/formKonseling" element={<FormKonseling />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;