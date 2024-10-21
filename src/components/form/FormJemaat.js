import React, { useState } from 'react';
import './FormJemaat.css';

const FormJemaat = () => {
  const [formData, setFormData] = useState({
    nama: '',
    jenisKelamin: '',
    status: '',
    tanggalLahir: '',
    alamat: '',
    pasFoto: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Logic for submitting form data to the backend goes here
  };

  return (
    <div className="jemaat-form-container">
      <h2>Form Daftar Kartu Jemaat</h2>
      <form className="jemaat-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="nama">Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="jenisKelamin">Jenis Kelamin:</label>
          <select
            id="jenisKelamin"
            name="jenisKelamin"
            value={formData.jenisKelamin}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Status</option>
            <option value="Belum Menikah">Belum Menikah</option>
            <option value="Menikah">Menikah</option>
            <option value="Duda/Janda">Duda/Janda</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="tanggalLahir">Tanggal Lahir:</label>
          <input
            type="date"
            id="tanggalLahir"
            name="tanggalLahir"
            value={formData.tanggalLahir}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="alamat">Alamat:</label>
          <textarea
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="pasFoto">Pas Foto:</label>
          <input
            type="file"
            id="pasFoto"
            name="pasFoto"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Daftar</button>
      </form>
    </div>
  );
};

export default FormJemaat;
