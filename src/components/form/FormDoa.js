import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

import './FormDoa.css';

const FormDoa = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    contactInfo: '',
    pokokDoa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Definisi mutation dengan fungsi async yang melakukan request ke server
  const mutation = useMutation({
    mutationFn: async (newData) => {
      const formBody = new URLSearchParams({
        username: newData.username,
        fullName: newData.fullName,
        contactInfo: newData.contactInfo,
        pokokDoa: newData.pokokDoa,
      });

      // Mengirim data ke API menggunakan axios
      const response = await axios.post(
        'http://localhost:3001/cbn/v1/service/doa',
        formBody,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Memastikan server mengembalikan status kode 201
      if (response.status !== 201) {
        throw new Error('Gagal mengirim data');
      }

      return response.data;
    },
    onSuccess: (data) => {
      console.log('Form submitted successfully:', data);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Permohonan doa berhasil dikirim.',
        confirmButtonText: 'OK'
      });      setFormData({
        username: '',
        fullName: '',
        contactInfo: '',
        pokokDoa: '',
      });
    },
    onError: (error) => {
      console.error('Form submission failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Gagal mengirim permohonan doa. Silakan coba lagi.',
        confirmButtonText: 'OK'
      });    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Menjalankan mutasi dengan data form yang diisi pengguna
    mutation.mutate(formData);
  };

  return (
    <div className="jemaat-form-container">
      <h2>Form Permohonan Doa</h2>
      <form className="jemaat-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="fullName">Nama Lengkap:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="contactInfo">Nomor Handphone:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="pokokDoa">Permohonan Doa:</label>
          <textarea
            id="pokokDoa"
            name="pokokDoa"
            value={formData.pokokDoa}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {mutation.isLoading ? 'Mengirim...' : 'Kirim Permohonan'}
        </button>
      </form>
    </div>
  );
};

export default FormDoa;
