import React, { useState } from 'react';
import './FormJemaat.css';

const FormJemaat = () => {
  const [formData, setFormData] = useState({
    nama: '',
    jenisKelamin: '',
    status: '',
    tanggalLahir: '',
    alamat: '',
    pasFoto: null,
    baptisan: '',
    baptisanDate: '',
    nohp: '',
    pendidikan: '',
    pekerjaan: '',
    kka: '',
    tanggalJoin: '',
    kepercayaanLama: '',
    jumlahAnggotaKeluarga: '',
    familyMembers: [], // State for family members
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      baptisan: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data to the backend goes here
    console.log(formData);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };



  const handleFamilyMemberChange = (index, e) => {
    const { name, value } = e.target;
    const newFamilyMembers = [...formData.familyMembers];
    newFamilyMembers[index] = {
      ...newFamilyMembers[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      familyMembers: newFamilyMembers,
    });
  };

  const handleFamilyMemberCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    const newFamilyMembers = Array.from({ length: count }, (_, i) => ({
      nama: '',
      hubungan: '',
    }));
    setFormData({
      ...formData,
      jumlahAnggotaKeluarga: count,
      familyMembers: newFamilyMembers,
    });
  };
  return (
    <div className="jemaat-form-container">
      <h2>Form Daftar Kartu Jemaat</h2>
      <form className="jemaat-form" onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
            <div className="form-row full-width">
              <label htmlFor="nama">Nama:</label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="tanggalLahir">Tanggal Lahir:</label>
              <input
                type="date"
                id="tanggalLahir"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="nohp">No Handphone:</label>
              <input
                type="text"
                id="nohp"
                name="nohp"
                value={formData.nohp}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row full-width">
              <label htmlFor="alamat">Alamat:</label>
              <textarea
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="pendidikan">Pendidikan Terakhir:</label>
              <input
                type="text"
                id="pendidikan"
                name="pendidikan"
                value={formData.pendidikan}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="pekerjaan">Pekerjaan:</label>
              <input
                type="text"
                id="pekerjaan"
                name="pekerjaan"
                value={formData.pekerjaan}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="kka">KKA:</label>
              <input
                type="text"
                id="kka"
                name="kka"
                value={formData.kka}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="status">Status Perkawinan:</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="">-- Pilih Status --</option>
                <option value="Belum Menikah">Belum Menikah</option>
                <option value="Menikah">Menikah</option>
                <option value="Duda/Janda">Duda/Janda</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="tanggalJoin">Tanggal Bergabung dengan GPPK:</label>
              <input
                type="month"
                id="tanggalJoin"
                name="tanggalJoin"
                value={formData.tanggalJoin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="kepercayaanLama">Kepercayaan Lama:</label>
              <select
                id="kepercayaanLama"
                name="kepercayaanLama"
                value={formData.kepercayaanLama}
                onChange={handleChange}
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Islam">Islam</option>
                <option value="Budha">Budha</option>
                <option value="Hindu">Hindu</option>
                <option value="Katholik">Katholik</option>
                <option value="Konghuchu">Konghuchu</option>
                <option value="lainLain">Lain-lain</option>
              </select>
            </div>
            <div className="form-row full-width">
              <label>Baptisan:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="option1"
                    checked={formData.baptisan === 'option1'}
                    onChange={handleRadioChange}
                  />
                  Baptisan Anak
                </label>
                <label>
                  <input
                    type="radio"
                    value="option2"
                    checked={formData.baptisan === 'option2'}
                    onChange={handleRadioChange}
                  />
                  Baptisan Dewasa
                </label>
                <label>
                  <input
                    type="radio"
                    value="option3"
                    checked={formData.baptisan === 'option3'}
                    onChange={handleRadioChange}
                  />
                  Belum Dibaptis
                </label>
              </div>
              <label>Tanggal Baptis:</label>
              <input
                type="date"
                id="baptisanDate"
                name="baptisanDate"
                value={formData.baptisanDate}
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" onClick={handleNext} className="submit-btn full-width">Next</button>
          </>
        )}
        
        {currentStep === 2 && (
          <div>
            {/* Add your additional questions here */}
            <div className="form-row">
              <label htmlFor="additionalQuestion1">Sudahkah saudara terlibat dalam pelayanan di GPPK CBN? :</label>
              <input
                type="text"
                id="additionalQuestion1"
                name="additionalQuestion1"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="additionalQuestion2">Bila sudah, dalam bidang apa saudara melayani? :</label>
              <input
                type="text"
                id="additionalQuestion2"
                name="additionalQuestion2"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="additionalQuestion2">Sebelumnya apakah saudara pernah terlibat dalam pelayanan di Gereja lain? :</label>
              <input
                type="text"
                id="additionalQuestion2"
                name="additionalQuestion2"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="additionalQuestion2">Bila pernah, dalam bidang apa saudara melayani? :</label>
              <input
                type="text"
                id="additionalQuestion2"
                name="additionalQuestion2"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="additionalQuestion2">Dimana saudara pernah melayani? :</label>
              <input
                type="text"
                id="additionalQuestion2"
                name="additionalQuestion2"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="additionalQuestion2">Apakah saudara sudah menjadi jemaat tetap yang berkomitmen di GPPK CBN :</label>
              <input
                type="text"
                id="additionalQuestion2"
                name="additionalQuestion2"
                onChange={handleChange}
                required
              />
            </div>
            {/* More additional questions can be added similarly */}
            <button type="button" onClick={handleBack} className="submit-btn">Back</button>
            <button type="button" onClick={handleNext} className="submit-btn">Next</button>
            </div>
        )}

{currentStep === 3 && (
          <div>
            <h3>Data Keluarga</h3>
            <div className="form-row">
              <label htmlFor="jumlahAnggotaKeluarga">Jumlah Anggota Keluarga:</label>
              <input
                type="number"
                id="jumlahAnggotaKeluarga"
                name="jumlahAnggotaKeluarga"
                value={formData.jumlahAnggotaKeluarga}
                onChange={handleFamilyMemberCountChange}
                required
              />
            </div>
            {formData.familyMembers.length > 0 && (
              <table className="family-member-table">
                <thead>
                  <tr>
                    <th>Nama</th>
                    <th>Hubungan</th>
                    <th>Status Pernikahan</th>
                    <th>Usia</th>
                    <th>Agama</th>
                    <th>Sudah Dibaptis</th>

                  </tr>
                </thead>
                <tbody>
                  {formData.familyMembers.map((member, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="nama"
                          value={member.nama}
                          onChange={(e) => handleFamilyMemberChange(index, e)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="hubungan"
                          value={member.hubungan}
                          onChange={(e) => handleFamilyMemberChange(index, e)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="hubungan"
                          value={member.status}
                          onChange={(e) => handleFamilyMemberChange(index, e)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="hubungan"
                          value={member.usia}
                          onChange={(e) => handleFamilyMemberChange(index, e)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="hubungan"
                          value={member.agama}
                          onChange={(e) => handleFamilyMemberChange(index, e)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="hubungan"
                          value={member.baptis}
                          onChange={(e) => handleFamilyMemberChange(index, e)}
                          required
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button type="button" onClick={handleBack} className="submit-btn">Back</button>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormJemaat;
