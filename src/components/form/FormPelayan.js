import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

function FormPelayan() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorHandphone: '',
    bidangPelayanan: '',
    sudahDibaptis: false,
    sudahBerkka: false,
    mauIkutPembinaan: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Formulir Pendaftaran Pelayan
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
                <TextField label="Nomor Handphone" name="nomorHandphone" value={formData.nomorHandphone} onChange={handleInputChange} fullWidth required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="bidang-pelayanan-label">Bidang Pelayanan</InputLabel>
                <Select
                  labelId="bidang-pelayanan-label"
                  id="bidangPelayanan"
                  name="bidangPelayanan"
                  value={formData.bidangPelayanan}
                  label="Bidang Pelayanan"
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value="usher">Usher</MenuItem>
                  <MenuItem value="lewi">Lewi (Vokal, MM, Soundman, Pemusik: Bass, Gitar, Drum, Keyboard)</MenuItem>
                  <MenuItem value="pendoa">Pendoa</MenuItem>
                  <MenuItem value="timKunjungan">Tim Kunjungan</MenuItem>
                  <MenuItem value="guruSekolahMinggu">Guru Sekolah Minggu</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={formData.sudahDibaptis} onChange={handleInputChange} name="sudahDibaptis" />}
                  label="Sudah Dibaptis"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.sudahBerkka} onChange={handleInputChange} name="sudahBerkka" />}
                  label="Sudah atau mau Berkomitmen Ber-KKA/Komsel"
                />
                <FormControlLabel
                  control={<Checkbox checked={formData.mauIkutPembinaan} onChange={handleInputChange} name="mauIkutPembinaan" />}
                  label="Mau Mengikuti Disiplin Ikut Kelas Pembinaan"
                />
              </FormGroup>
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

export default FormPelayan;