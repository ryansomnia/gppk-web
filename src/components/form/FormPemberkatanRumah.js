import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel } from '@mui/material';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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