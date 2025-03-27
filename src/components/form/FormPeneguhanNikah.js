import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
function FormPeneguhanNikah() {
  const [formData, setFormData] = useState({
    namaLengkapPria: '',
    tempatLahirPria: '',
    tanggalLahirPria: '',
    alamatPria: '',
    teleponPria: '',
    pendidikanTerakhirPria: '',
    pekerjaanPria: '',
    kkaPria: '',
    wilayahPria: '',
    namaLengkapWanita: '',
    tempatLahirWanita: '',
    tanggalLahirWanita: '',
    alamatWanita: '',
    teleponWanita: '',
    pendidikanTerakhirWanita: '',
    pekerjaanWanita: '',
    kkaWanita: '',
    wilayahWanita: '',
    tanggalPernikahan: '',
    jamPernikahan: '',
    tempatPernikahan: '',
    pelayanPernikahan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.gppkcbn.org/cbn/v1/service/pernikahan/addData', formData);
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data berhasil dikirim.',
        });
        setFormData({
          namaLengkapPria: '',
          tempatLahirPria: '',
          tanggalLahirPria: '',
          alamatPria: '',
          teleponPria: '',
          pendidikanTerakhirPria: '',
          pekerjaanPria: '',
          kkaPria: '',
          wilayahPria: '',
          namaLengkapWanita: '',
          tempatLahirWanita: '',
          tanggalLahirWanita: '',
          alamatWanita: '',
          teleponWanita: '',
          pendidikanTerakhirWanita: '',
          pekerjaanWanita: '',
          kkaWanita: '',
          wilayahWanita: '',
          tanggalPernikahan: '',
          jamPernikahan: '',
          tempatPernikahan: '',
          pelayanPernikahan: '',
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
          Formulir Peneguhan Pernikahan
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Data Pria
              </Typography>
              <FormControl fullWidth margin="normal">
                <TextField label="Nama Lengkap Pria" name="namaLengkapPria" value={formData.namaLengkapPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Tempat Lahir Pria" name="tempatLahirPria" value={formData.tempatLahirPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Tanggal Lahir Pria" name="tanggalLahirPria" type="date" value={formData.tanggalLahirPria} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Alamat Pria" name="alamatPria" value={formData.alamatPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Telepon Pria" name="teleponPria" value={formData.teleponPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Pendidikan Terakhir Pria" name="pendidikanTerakhirPria" value={formData.pendidikanTerakhirPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Pekerjaan Pria" name="pekerjaanPria" value={formData.pekerjaanPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="KKA Pria" name="kkaPria" value={formData.kkaPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Wilayah Pria" name="wilayahPria" value={formData.wilayahPria} onChange={handleInputChange} fullWidth required />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Data Wanita
              </Typography>
              <FormControl fullWidth margin="normal">
                <TextField label="Nama Lengkap Wanita" name="namaLengkapWanita" value={formData.namaLengkapWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Tempat Lahir Wanita" name="tempatLahirWanita" value={formData.tempatLahirWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Tanggal Lahir Wanita" name="tanggalLahirWanita" type="date" value={formData.tanggalLahirWanita} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Alamat Wanita" name="alamatWanita" value={formData.alamatWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Telepon Wanita" name="teleponWanita" value={formData.teleponWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Pendidikan Terakhir Wanita" name="pendidikanTerakhirWanita" value={formData.pendidikanTerakhirWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Pekerjaan Wanita" name="pekerjaanWanita" value={formData.pekerjaanWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="KKA Wanita" name="kkaWanita" value={formData.kkaWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField label="Wilayah Wanita" name="wilayahWanita" value={formData.wilayahWanita} onChange={handleInputChange} fullWidth required />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Detail Pernikahan
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <TextField label="Tanggal Pernikahan" name="tanggalPernikahan" type="date" value={formData.tanggalPernikahan} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <TextField label="Jam Pernikahan" name="jamPernikahan" type="time" value={formData.jamPernikahan} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <TextField label="Tempat Pernikahan" name="tempatPernikahan" value={formData.tempatPernikahan} onChange={handleInputChange} fullWidth required />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <TextField label="Pelayan Pernikahan" name="pelayanPernikahan" value={formData.pelayanPernikahan} onChange={handleInputChange} fullWidth required />
                  </FormControl>
                </Grid>
              </Grid>
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

export default FormPeneguhanNikah;