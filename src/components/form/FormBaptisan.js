import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormBaptisan = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthPlace: '',
    birthDate: '',
    gender: '',
    status: '',
    contactInfo: '',
    address: '',
    hasKKA: '',
    kkaName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const mutation = useMutation({
    mutationFn: async (newData) => {
      const response = await axios.post(
        'https://api.gppkcbn.org/cbn/v1/service/baptisan',
        newData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.status !== 201) {
        throw new Error('Gagal mengirim data');
      }
      return response.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data baptisan berhasil dikirim.',
      });
      setFormData({ fullName: '', birthPlace: '', birthDate: '', gender: '', status: '', contactInfo: '', address: '', hasKKA: '', kkaName: '' });
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Gagal mengirim data. Silakan coba lagi.',
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Form Baptisan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nama Lengkap:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Tempat Lahir:</label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Tanggal Lahir:</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Jenis Kelamin:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Status</option>
              <option value="Lajang">Lajang</option>
              <option value="Menikah">Menikah</option>
              <option value="Duda/Janda">Duda/Janda</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Nomor Handphone:</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Alamat:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Sudah ber-KKA?</label>
          <select
            name="hasKKA"
            value={formData.hasKKA}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Pilih</option>
            <option value="Ya">Ya</option>
            <option value="Tidak">Tidak</option>
          </select>
        </div>
        {formData.hasKKA === "Ya" && (
          <div>
            <label className="block text-gray-700">Nama KKA:</label>
            <input
              type="text"
              name="kkaName"
              value={formData.kkaName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {mutation.isLoading ? 'Mengirim...' : 'Kirim Formulir'}
        </button>
      </form>
    </div>
  );
};

export default FormBaptisan;
