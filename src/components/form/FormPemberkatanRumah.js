import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
function FormPemberkatanRumah() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    alamat: '',
    nomorHandphone: '',
    tanggalPelaksanaan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.gppkcbn.org/cbn/v1/service/pemberkatanRumah/addData', formData);
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data berhasil dikirim.',
        });
        setFormData({
          namaLengkap: '',
          alamat: '',
          nomorHandphone: '',
          tanggalPelaksanaan: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Gagal mengirim data. Silakan coba lagi.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Terjadi kesalahan. Silakan coba lagi.',
        });
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Formulir Pemberkatan Rumah
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField label="Nama Lengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} fullWidth required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField label="Alamat" name="alamat" value={formData.alamat} onChange={handleInputChange} fullWidth required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField label="Nomor Handphone" name="nomorHandphone" value={formData.nomorHandphone} onChange={handleInputChange} fullWidth required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <TextField label="Tanggal Pelaksanaan" name="tanggalPelaksanaan" type="date" value={formData.tanggalPelaksanaan} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default FormPemberkatanRumah;