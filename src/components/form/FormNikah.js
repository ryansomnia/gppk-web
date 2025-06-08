import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormPeneguhanNikah() {
  const [formData, setFormData] = useState({
    // Detail Pernikahan
    tanggalPernikahan: '',
    jamPernikahan: '',
    tempatPernikahan: '',

    // Data Pria
    namaLengkapPria: '',
    tempatLahirPria: '',
    tanggalLahirPria: '',
    alamatPria: '',
    teleponPria: '',
    pekerjaanPria: '',
    AgamaPriaDahulu: '',
    GerejaPriaDahulu: '',
    NoKartuPria: '',
    PernikahanPertamaPria: '1', // Default '1' for RadioGroup (corresponding to true)
    JumlahAnakPria: 0, // Default to 0

    // Data Wanita
    namaLengkapWanita: '',
    tempatLahirWanita: '',
    tanggalLahirWanita: '',
    alamatWanita: '',
    teleponWanita: '',
    pekerjaanWanita: '',
    AgamaWanitaDahulu: '',
    GerejaWanitaDahulu: '',
    NoKartuWanita: '',
    PernikahanPertamaWanita: '1', // Default '1' for RadioGroup (corresponding to true)
    JumlahAnakWanita: 0, // Default to 0

    // Informasi Tambahan
    BergerejaSejak: '',
    ArtiLahirBaru: '',
    LamaPerkenalan: '',
    KomitmenSuci: '1', // Default '1' for RadioGroup (corresponding to true)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle specific logic for JumlahAnak when PernikahanPertama changes
    if (name === 'PernikahanPertamaPria') {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
        // Set JumlahAnakPria to 0 if 'Ya' (value '1'), otherwise keep previous value
        JumlahAnakPria: value === '1' ? 0 : prevData.JumlahAnakPria
      }));
    } else if (name === 'PernikahanPertamaWanita') {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
        // Set JumlahAnakWanita to 0 if 'Ya' (value '1'), otherwise keep previous value
        JumlahAnakWanita: value === '1' ? 0 : prevData.JumlahAnakWanita
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert string values from RadioGroup ('1' or '0') to actual numbers (1 or 0)
    const dataToSend = {
      ...formData,
      PernikahanPertamaPria: parseInt(formData.PernikahanPertamaPria, 10),
      PernikahanPertamaWanita: parseInt(formData.PernikahanPertamaWanita, 10),
      KomitmenSuci: parseInt(formData.KomitmenSuci, 10),
      // Ensure JumlahAnak are numbers, and explicitly set to 0 if it's their first marriage
      JumlahAnakPria: formData.PernikahanPertamaPria === '1' ? 0 : parseInt(formData.JumlahAnakPria, 10) || 0,
      JumlahAnakWanita: formData.PernikahanPertamaWanita === '1' ? 0 : parseInt(formData.JumlahAnakWanita, 10) || 0,
    };

    try {
      const response = await axios.post('https://api.gppkcbn.org/cbn/v1/service/pernikahan/addData', dataToSend);

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data berhasil dikirim.',
        });
        // Reset form after successful submission
        setFormData({
          tanggalPernikahan: '',
          jamPernikahan: '',
          tempatPernikahan: '',

          namaLengkapPria: '',
          tempatLahirPria: '',
          tanggalLahirPria: '',
          alamatPria: '',
          teleponPria: '',
          pekerjaanPria: '',
          AgamaPriaDahulu: '',
          GerejaPriaDahulu: '',
          NoKartuPria: '',
          PernikahanPertamaPria: '1',
          JumlahAnakPria: 0,

          namaLengkapWanita: '',
          tempatLahirWanita: '',
          tanggalLahirWanita: '',
          alamatWanita: '',
          teleponWanita: '',
          pekerjaanWanita: '',
          AgamaWanitaDahulu: '',
          GerejaWanitaDahulu: '',
          NoKartuWanita: '',
          PernikahanPertamaWanita: '1',
          JumlahAnakWanita: 0,

          BergerejaSejak: '',
          ArtiLahirBaru: '',
          LamaPerkenalan: '',
          KomitmenSuci: '1',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: response.data.message || 'Gagal mengirim data. Silakan coba lagi.',
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
          Formulir Pernikahan
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Data Pria */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Data Pria
              </Typography>
              <TextField label="Nama Lengkap Pria" name="namaLengkapPria" value={formData.namaLengkapPria} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Tempat Lahir Pria" name="tempatLahirPria" value={formData.tempatLahirPria} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Tanggal Lahir Pria" name="tanggalLahirPria" type="date" value={formData.tanggalLahirPria} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required margin="normal" />
              <TextField label="Alamat Pria" name="alamatPria" value={formData.alamatPria} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Telepon Pria" name="teleponPria" value={formData.teleponPria} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Pekerjaan Pria" name="pekerjaanPria" value={formData.pekerjaanPria} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Agama Pria Dahulu" name="AgamaPriaDahulu" value={formData.AgamaPriaDahulu} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Gereja Pria Dahulu" name="GerejaPriaDahulu" value={formData.GerejaPriaDahulu} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="No. Kartu Pria" name="NoKartuPria" value={formData.NoKartuPria} onChange={handleInputChange} fullWidth required margin="normal" />

              <FormControl component="fieldset" margin="normal" fullWidth>
                <InputLabel component="legend" shrink>Pernikahan Pertama Pria?</InputLabel>
                <RadioGroup row name="PernikahanPertamaPria" value={formData.PernikahanPertamaPria} onChange={handleInputChange}>
                  <FormControlLabel value="1" control={<Radio />} label="Ya" />
                  <FormControlLabel value="0" control={<Radio />} label="Tidak" />
                </RadioGroup>
              </FormControl>
              {/* Conditional rendering for Jumlah Anak Pria */}
              {formData.PernikahanPertamaPria === '0' && (
                <TextField label="Jumlah Anak Pria (Jika Ada)" name="JumlahAnakPria" type="number" value={formData.JumlahAnakPria} onChange={handleInputChange} fullWidth margin="normal" />
              )}
            </Grid>

            {/* Data Wanita */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Data Wanita
              </Typography>
              <TextField label="Nama Lengkap Wanita" name="namaLengkapWanita" value={formData.namaLengkapWanita} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Tempat Lahir Wanita" name="tempatLahirWanita" value={formData.tempatLahirWanita} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Tanggal Lahir Wanita" name="tanggalLahirWanita" type="date" value={formData.tanggalLahirWanita} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required margin="normal" />
              <TextField label="Alamat Wanita" name="alamatWanita" value={formData.alamatWanita} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Telepon Wanita" name="teleponWanita" value={formData.teleponWanita} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Pekerjaan Wanita" name="pekerjaanWanita" value={formData.pekerjaanWanita} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Agama Wanita Dahulu" name="AgamaWanitaDahulu" value={formData.AgamaWanitaDahulu} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Gereja Wanita Dahulu" name="GerejaWanitaDahulu" value={formData.GerejaWanitaDahulu} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="No. Kartu Wanita" name="NoKartuWanita" value={formData.NoKartuWanita} onChange={handleInputChange} fullWidth required margin="normal" />

              <FormControl component="fieldset" margin="normal" fullWidth>
                <InputLabel component="legend" shrink>Pernikahan Pertama Wanita?</InputLabel>
                <RadioGroup row name="PernikahanPertamaWanita" value={formData.PernikahanPertamaWanita} onChange={handleInputChange}>
                  <FormControlLabel value="1" control={<Radio />} label="Ya" />
                  <FormControlLabel value="0" control={<Radio />} label="Tidak" />
                </RadioGroup>
              </FormControl>
              {/* Conditional rendering for Jumlah Anak Wanita */}
              {formData.PernikahanPertamaWanita === '0' && (
                <TextField label="Jumlah Anak Wanita (Jika Ada)" name="JumlahAnakWanita" type="number" value={formData.JumlahAnakWanita} onChange={handleInputChange} fullWidth margin="normal" />
              )}
            </Grid>

            {/* Detail Pernikahan */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Detail Pernikahan
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField label="Tanggal Pernikahan" name="tanggalPernikahan" type="date" value={formData.tanggalPernikahan} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Jam Pernikahan" name="jamPernikahan" type="time" value={formData.jamPernikahan} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required margin="normal" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Tempat Pernikahan" name="tempatPernikahan" value={formData.tempatPernikahan} onChange={handleInputChange} fullWidth required margin="normal" />
                </Grid>
              </Grid>
            </Grid>

            {/* Informasi Tambahan */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Informasi Tambahan
              </Typography>
              <TextField label="Bergereja Sejak" name="BergerejaSejak" value={formData.BergerejaSejak} onChange={handleInputChange} fullWidth required margin="normal" />
              <TextField label="Arti Lahir Baru" name="ArtiLahirBaru" value={formData.ArtiLahirBaru} onChange={handleInputChange} multiline rows={4} fullWidth required margin="normal" />
              <TextField label="Lama Perkenalan" name="LamaPerkenalan" value={formData.LamaPerkenalan} onChange={handleInputChange} fullWidth required margin="normal" />

              <FormControl component="fieldset" margin="normal" fullWidth>
              <Typography variant="subtitle1" component="legend" sx={{ mb: 1 }}>
                  Saudara mengakui di hadapan TUHAN bahwa Hubungan Saudara dengan calon teman hidup saudara selama ini SUCI (tidak pernah melakukan hubungan sex)
                </Typography>   
                  <RadioGroup row name="KomitmenSuci" value={formData.KomitmenSuci} onChange={handleInputChange}>
                  <FormControlLabel value="1" control={<Radio />} label="Ya" />
                  <FormControlLabel value="0" control={<Radio />} label="Tidak" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
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
