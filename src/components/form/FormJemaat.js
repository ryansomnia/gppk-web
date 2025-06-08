import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment'; // Import moment.js

function FormJemaat() {
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    tanggal_lahir: '', // Akan dalam format YYYY-MM-DD
    tempat_lahir: '',
    address: '',
    phone_number: '',
    email: '',
    pendidikan: '',
    pekerjaan: '',
    kka: '',
    statusNikah: '',
    kepercayaan_lama: '',
    tanggal_join: '', // Akan dalam format YYYY-MM-DD
    baptisan_air: 'tidak', // Default 'tidak' for RadioGroup (sesuaikan jika perlu)
    baptisan_roh: 'tidak', // Default 'tidak' for RadioGroup (sesuaikan jika perlu)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Persiapkan data untuk dikirim ke backend
    // Kirim tanggal langsung dalam format 'YYYY-MM-DD' yang sudah dihasilkan oleh input type="date"
    const dataToSend = {
      ...formData,
      tanggal_lahir: formData.tanggal_lahir || null, // Kirim string YYYY-MM-DD atau null jika kosong
      tanggal_join: formData.tanggal_join || null,   // Kirim string YYYY-MM-DD atau null jika kosong
      // 'baptisan_air' dan 'baptisan_roh' sudah dalam string 'ya'/'tidak' yang cocok untuk VARCHAR
    };

    try {
      const response = await axios.post('https://api.gppkcbn.org/cbn/v1/service/jemaat/addData', dataToSend);

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data pribadi jemaat berhasil ditambahkan.',
        });
        // Reset form setelah berhasil submit
        setFormData({
          full_name: '',
          username: '',
          tanggal_lahir: '',
          tempat_lahir: '',
          address: '',
          phone_number: '',
          email: '',
          pendidikan: '',
          pekerjaan: '',
          kka: '',
          statusNikah: '',
          kepercayaan_lama: '',
          tanggal_join: '',
          baptisan_air: 'tidak',
          baptisan_roh: 'tidak',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: response.data.message || 'Gagal menambahkan data. Silakan coba lagi.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.',
      });
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Formulir Kartu Jemaat
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Nama Lengkap" name="full_name" value={formData.full_name} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Username" name="username" value={formData.username} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Tempat Lahir" name="tempat_lahir" value={formData.tempat_lahir} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Tanggal Lahir" name="tanggal_lahir" type="date" value={formData.tanggal_lahir} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required margin="normal" />
              <TextField label="Alamat" name="address" value={formData.address} onChange={handleInputChange} fullWidth required margin="normal" multiline rows={3} />
              <TextField label="Nomor Telepon" name="phone_number" value={formData.phone_number} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} fullWidth required margin="normal" />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField label="Pendidikan Terakhir" name="pendidikan" value={formData.pendidikan} onChange={handleInputChange} fullWidth margin="normal" />
              <TextField label="Pekerjaan" name="pekerjaan" value={formData.pekerjaan} onChange={handleInputChange} fullWidth margin="normal" />
              <TextField label="KKA" name="kka" value={formData.kka} onChange={handleInputChange} fullWidth margin="normal" />
              <TextField label="Status Nikah" name="statusNikah" value={formData.statusNikah} onChange={handleInputChange} fullWidth margin="normal" />
              <TextField label="Kepercayaan Lama" name="kepercayaan_lama" value={formData.kepercayaan_lama} onChange={handleInputChange} fullWidth margin="normal" />
              <TextField label="Tanggal Bergabung" name="tanggal_join" type="date" value={formData.tanggal_join} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required margin="normal" />
              
              <FormControl component="fieldset" margin="normal" fullWidth>
                <InputLabel component="legend" shrink>Baptisan Air?</InputLabel>
                <RadioGroup row name="baptisan_air" value={formData.baptisan_air} onChange={handleInputChange}>
                  <FormControlLabel value="ya" control={<Radio />} label="Ya" />
                  <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
                </RadioGroup>
              </FormControl>

              <FormControl component="fieldset" margin="normal" fullWidth>
                <InputLabel component="legend" shrink>Baptisan Roh?</InputLabel>
                <RadioGroup row name="baptisan_roh" value={formData.baptisan_roh} onChange={handleInputChange}>
                  <FormControlLabel value="ya" control={<Radio />} label="Ya" />
                  <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Tambah Data Jemaat
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
export default FormJemaat;
