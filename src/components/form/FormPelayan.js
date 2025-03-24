import React, { useState, useMemo, useCallback } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

function FormPelayan() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorHandphone: '',
    bidangPelayanan: '',
    sudahDibaptis: false,
    sudahBerkka: false,
    mauIkutPembinaan: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = useCallback(() => {
    let errors = {};
    let isValid = true;

    if (!formData.namaLengkap) {
      errors.namaLengkap = 'Nama Lengkap harus diisi';
      isValid = false;
    }

    if (!formData.nomorHandphone) {
      errors.nomorHandphone = 'Nomor Handphone harus diisi';
      isValid = false;
    }

    if (!formData.bidangPelayanan) {
      errors.bidangPelayanan = 'Bidang Pelayanan harus dipilih';
      isValid = false;
    }

    return { errors, isValid };
  }, [formData]);

  const isFormValid = useMemo(() => {
    return validateForm().isValid;
  }, [validateForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid } = validateForm();
    if (isValid) {
      try {
        const response = await axios.post('http://localhost:3013/cbn/v1/service/pelayan/addData', {
          namaLengkap: formData.namaLengkap,
          nomorHandphone: formData.nomorHandphone,
          bidangPelayanan: formData.bidangPelayanan,
        });

        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Data berhasil dikirim.',
          });
          setFormData({
            namaLengkap: '',
            nomorHandphone: '',
            bidangPelayanan: '',
            sudahDibaptis: false,
            sudahBerkka: false,
            mauIkutPembinaan: false,
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
    } else {
      setFormErrors(validateForm().errors);
    }
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
              <FormControl fullWidth margin="normal" error={!!formErrors.namaLengkap}>
                <TextField label="Nama Lengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} fullWidth required helperText={formErrors.namaLengkap} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal" error={!!formErrors.nomorHandphone}>
                <TextField label="Nomor Handphone" name="nomorHandphone" value={formData.nomorHandphone} onChange={handleInputChange} fullWidth required helperText={formErrors.nomorHandphone} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal" error={!!formErrors.bidangPelayanan}>
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
                {formErrors.bidangPelayanan && <Typography variant="caption" color="error">{formErrors.bidangPelayanan}</Typography>}
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
              <Button type="submit" variant="contained" color="primary" disabled={!isFormValid} sx={{ backgroundColor: !isFormValid ? 'grey' : 'primary.main' }}>
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