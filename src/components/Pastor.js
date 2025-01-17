import React from 'react';
import './Pastor.css';

function Pastor() {
  return (
    <div className='pastor-section'>
      <div className='left-section'>
        <img alt='ps-image' src='/images/ps.png' />
      </div>
      <div className='right-section'>
        <h6>Gembala Sidang</h6>
        <h1>Ps. Hendrawan</h1>
        <p>
          Pastor Philip Mantofa dilahirkan di Surabaya pada tanggal 27 September, 1974. Dari kota kelahirannya, ia menempuh sekolah di Taipei, Singapore, dan akhirnya bertobat saat SMA di Vancouver, Canada. Dua tahun setelah lulus sarjana sekolah Alkitab, saat kerusuhan terjadi di Indonesia pada bulan Mei 1998, ia memutuskan untuk pulang ke tanah airnya demi memberitakan Injil.
        </p>
        <br />
        <br />
        <p>
          Saat ini, ia menjabat sebagai gembala senior organisasi dan jaringan gereja ini. Visinya adalah untuk mendirikan 1.000 gereja lokal yang kuat dengan 1 juta murid Kristus. Kerinduan hatinya yang menyala adalah untuk melihat bangsa-bangsa mengalami kasih Yesus Kristus.
        </p>
      </div>
    </div>
  );
}

export default Pastor;
