import React, { useState, useMemo } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
function FormPenyerahanAnak() {
  const [formData, setFormData] = useState({
    namaAyah: '',
    tempatTanggalLahirAyah: '',
    alamatAyah: '',
    teleponAyah: '',
    tempatTanggalBaptisAyah: '',
    pendidikanTerakhirAyah: '',
    pekerjaanAyah: '',
    kkaAyah: '',
    wilayahAyah: '',
    namaIbu: '',
    tempatTanggalLahirIbu: '',
    alamatIbu: '',
    teleponIbu: '',
    tempatTanggalBaptisIbu: '',
    pendidikanTerakhirIbu: '',
    pekerjaanIbu: '',
    kkaIbu: '',
    wilayahIbu: '',
    namaAnak: '',
    tempatTanggalLahirAnak: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.gppkcbn.org/cbn/v1/service/penyerahanAnak/addData', formData);
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data berhasil dikirim.',
        });
        // Reset form
        setFormData({
          namaAyah: '',
          tempatTanggalLahirAyah: '',
          alamatAyah: '',
          teleponAyah: '',
          tempatTanggalBaptisAyah: '',
          pendidikanTerakhirAyah: '',
          pekerjaanAyah: '',
          kkaAyah: '',
          wilayahAyah: '',
          namaIbu: '',
          tempatTanggalLahirIbu: '',
          alamatIbu: '',
          teleponIbu: '',
          tempatTanggalBaptisIbu: '',
          pendidikanTerakhirIbu: '',
          pekerjaanIbu: '',
          kkaIbu: '',
          wilayahIbu: '',
          namaAnak: '',
          tempatTanggalLahirAnak: '',
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
          Formulir Penyerahan Anak
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}> {/* Mengurangi spacing untuk responsivitas */}
            <Grid item xs={12} sm={6}> {/* Menggunakan sm untuk breakpoint tablet */}
              <TextField label="Nama Ayah" name="namaAyah" value={formData.namaAyah} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Tempat/Tanggal Lahir Ayah" name="tempatTanggalLahirAyah" value={formData.tempatTanggalLahirAyah} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField placeholder="Alamat Ayah" multiline rows={2} label="Alamat Ayah" name="alamatAyah" value={formData.alamatAyah} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Telepon Ayah" name="teleponAyah" value={formData.teleponAyah} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Tempat/Tanggal Baptis Ayah" name="tempatTanggalBaptisAyah" value={formData.tempatTanggalBaptisAyah} onChange={handleInputChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pendidikan Terakhir Ayah" name="pendidikanTerakhirAyah" value={formData.pendidikanTerakhirAyah} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pekerjaan Ayah" name="pekerjaanAyah" value={formData.pekerjaanAyah} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="KKA Ayah" name="kkaAyah" value={formData.kkaAyah} onChange={handleInputChange} fullWidth required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField label="Nama Ibu" name="namaIbu" value={formData.namaIbu} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Tempat/Tanggal Lahir Ibu" name="tempatTanggalLahirIbu" value={formData.tempatTanggalLahirIbu} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField multiline rows={2} label="Alamat Ibu" name="alamatIbu" value={formData.alamatIbu} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Telepon Ibu" name="teleponIbu" value={formData.teleponIbu} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Tempat/Tanggal Baptis Ibu" name="tempatTanggalBaptisIbu" value={formData.tempatTanggalBaptisIbu} onChange={handleInputChange} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pendidikan Terakhir Ibu" name="pendidikanTerakhirIbu" value={formData.pendidikanTerakhirIbu} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pekerjaan Ibu" name="pekerjaanIbu" value={formData.pekerjaanIbu} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="KKA Ibu" name="kkaIbu" value={formData.kkaIbu} onChange={handleInputChange} fullWidth required />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField label="Nama Anak" name="namaAnak" value={formData.namaAnak} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Tempat/Tanggal Lahir Anak" name="tempatTanggalLahirAnak" value={formData.tempatTanggalLahirAnak} onChange={handleInputChange} fullWidth required />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: 'primary.main',
                  width: '100%',
                  height: '50px',
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default FormPenyerahanAnak;