import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Grid, Box, Paper, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function BaptisanAirForm() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    alamat: '',
    noHP: '',
    pendidikanTerakhir: '',
    pekerjaan: '',
    kka: '',
    status: '',
    tanggalMenikah: '',
    kepercayaanLama: '',
    jumlahKeluarga: 0,
    keluarga: [],

  });
  

  const [checklist, setChecklist] = useState('0'); // Inisialisasi dengan '0'
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'jumlahKeluarga') {
      let jumlah = parseInt(value, 10);
      if (isNaN(jumlah)) {
        jumlah = 0;
      }
      jumlah = Math.max(0, jumlah);
      const keluargaBaru = formData.keluarga.slice(0, jumlah);
      for (let i = keluargaBaru.length; i < jumlah; i++) {
        keluargaBaru.push({
          nama: '',
          hubungan: '',
          statusMenikah: '',
          usia: '',
          agama: '',
          sudahDibaptis: '',
        });
      }
      setFormData({ ...formData, jumlahKeluarga: jumlah, keluarga: keluargaBaru });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleKeluargaChange = (index, e) => {
    const { name, value } = e.target;
    const newKeluarga = [...formData.keluarga];
    newKeluarga[index][name] = value;
    setFormData({ ...formData, keluarga: newKeluarga });
  };
  const handleChecklistChange = (e) => {
    setChecklist(e.target.checked ? '1' : '0');
  };

  useEffect(() => {
    let isFormFilled = true;
    for (const key in formData) {
      if (key === 'tanggalMenikah' && formData.status === 'Belum') {
        continue;
      }
      if (formData[key] === '') {
        isFormFilled = false;
        break;
      }
    }
    setIsSubmitDisabled(!(isFormFilled && checklist === '1'));
  }, [formData, checklist]);

  const mutation = useMutation({
    mutationFn: (data) => axios.post('https://api.gppkcbn.org/cbn/v1/service/baptisan/addFormBaptisan', data),
    onSuccess: () => {
      setFormData({
        namaLengkap: '',
        tempatLahir: '',
        tanggalLahir: '',
        alamat: '',
        noHP: '',
        pendidikanTerakhir: '',
        pekerjaan: '',
        kka: '',
        status: '',
        tanggalMenikah: '',
        kepercayaanLama: '',
        jumlahKeluarga: 0,
        keluarga: [],
      });
      setChecklist('0');
      setSnackbarMessage('Formulir berhasil dikirim!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/'); // Redirect ke halaman home
      }, 2000); // Redirect setelah 2 detik
    },
    onError: (error) => {
      setSnackbarMessage(`Gagal mengirim formulir: ${error.message}`);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      const dataToSend = {
        ...formData,
        status: formData.status || null,
        tanggalMenikah: formData.tanggalMenikah || null,
        checklist: checklist,
      };
      mutation.mutate(dataToSend);
    }
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Formulir Baptisan Air
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
              <TextField label="Nama Lengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Tempat Lahir" name="tempatLahir" value={formData.tempatLahir} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField label="Tanggal Lahir" name="tanggalLahir" type="date" value={formData.tanggalLahir} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Alamat" name="alamat" type="text" value={formData.alamat} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="No. HP" name="noHP" value={formData.noHP} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pendidikan Terakhir" name="pendidikanTerakhir" value={formData.pendidikanTerakhir} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Pekerjaan" name="pekerjaan" value={formData.pekerjaan} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="KKA" name="kka" value={formData.kka} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <RadioGroup row name="status" value={formData.status} onChange={handleInputChange}>
                  <FormControlLabel value="Menikah" control={<Radio />} label="Menikah" />
                  <FormControlLabel value="Belum" control={<Radio />} label="Belum" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {formData.status === 'Menikah' && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField label="Tanggal Menikah" name="tanggalMenikah" type="date" value={formData.tanggalMenikah} onChange={handleInputChange} InputLabelProps={{ shrink: true }} fullWidth required />
            </FormControl>
          </Grid>
        )}
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <Typography component="legend">Kepercayaan Lama</Typography>
                <RadioGroup row name="kepercayaanLama" value={formData.kepercayaanLama} onChange={handleInputChange}>
                <FormControlLabel value="Kristen" control={<Radio />} label="Kristen" />
                  <FormControlLabel value="Islam" control={<Radio />} label="Islam" />
                  <FormControlLabel value="Hindu" control={<Radio />} label="Hindu" />
                  <FormControlLabel value="Budha" control={<Radio />} label="Budha" />
                  <FormControlLabel value="Katolik" control={<Radio />} label="Katolik" />
                  <FormControlLabel value="Lainnya" control={<Radio />} label="Lainnya" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Jumlah Anggota Keluarga"
                name="jumlahKeluarga"
                type="number"
                value={formData.jumlahKeluarga}
                onChange={handleInputChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Penjelasan Mengenai Keluarga
              </Typography>
              {formData.keluarga.map((anggota, index) => (
                <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Nama" name="nama" value={anggota.nama} onChange={(e) => handleKeluargaChange(index, e)} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Hubungan" name="hubungan" value={anggota.hubungan} onChange={(e) => handleKeluargaChange(index, e)} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Status Menikah" name="statusMenikah" value={anggota.statusMenikah} onChange={(e) => handleKeluargaChange(index, e)} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Usia" name="usia" value={anggota.usia} onChange={(e) => handleKeluargaChange(index, e)} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Agama" name="agama" value={anggota.agama} onChange={(e) => handleKeluargaChange(index, e)} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Sudah Baptis" name="sudahDibaptis" value={anggota.sudahDibaptis} onChange={(e) => handleKeluargaChange(index, e)} fullWidth />
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={checklist === '1'} onChange={handleChecklistChange} />}
                  label="Saya mengaku dengan mulut saya bahwa YESUS KRISTUS adalah TUHAN dan saya percaya di dalam hati bahwa TUHAN telah membangkitkan DIA dari antara orang mati. Saya percaya dan saya mau di BAPTIS, maka saya selamat. (Markus 16:16; Roma 10:9) Dengan ini saya menyatakan menerima BAPTISAN SELAM atas keyakinan dan kehendak saya sendiri."
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitDisabled}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default BaptisanAirForm;