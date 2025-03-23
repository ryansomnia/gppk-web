import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';

const FormKonseling = () => {
  const [formData, setFormData] = useState({
    jenisKonsultasi: '', // Perbaikan: Nilai awal string kosong
    fullName: '',
    tanggalLahir: '',
    sex: '',
    statusPernikahan: '',
    noHP: '',
    alamat: '',
    isi: '',
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
      console.log('Data yang dikirim:', newData); // Tambahkan log untuk debug

      const response = await axios.post(
        'http://localhost:3013/cbn/v1/service/konseling/addData', // Ganti URL API jika perlu
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
        text: 'Data konseling berhasil dikirim.',
      });
      setFormData({
        jenisKonsultasi: '', // Ubah nilai awal menjadi null atau nilai lain
        fullName: '',
        tanggalLahir: '',
        sex: '',
        statusPernikahan: '',
        noHP: '',
        alamat: '',
        isi: '',
      });
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
      <h2 className="text-2xl font-bold text-center mb-4">Form Konseling</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Jenis Konsultasi:</label>
          <select
            name="jenisKonsultasi"
            value={formData.jenisKonsultasi}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Pilih Jenis Konsultasi</option>
            <option value="Pelayanan">Pelayanan</option>
            <option value="Pekerjaan">Pekerjaan</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Pasangan">Pasangan</option>
            <option value="Ekonomi">Ekonomi</option>
          </select>
        </div>
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
        <div>
          <label className="block text-gray-700">Tanggal Lahir:</label>
          <input
            type="date"
            name="tanggalLahir"
            value={formData.tanggalLahir}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Jenis Kelamin:</label>
          <select
            name="sex"
            value={formData.sex}
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
          <label className="block text-gray-700">Status Pernikahan:</label>
          <select
            name="statusPernikahan"
            value={formData.statusPernikahan}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Pilih Status Pernikahan</option>
            <option value="Lajang">Lajang</option>
            <option value="Menikah">Menikah</option>
            <option value="Duda/Janda">Duda/Janda</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Nomor Handphone:</label>
          <input
            type="text"
            name="noHP"
            value={formData.noHP}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Alamat:</label>
          <textarea
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Isi Konsultasi:</label>
          <textarea
            name="isi"
            value={formData.isi}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
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

export default FormKonseling;