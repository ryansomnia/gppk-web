import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import './BannerBible.css';

const BannerBible = () => {
  const [checked, setChecked] = useState({
    chapter_1: false,
    chapter_2: false,
    chapter_3: false,
  });
  const [chapter1, setChapter1] = useState("");
  const [chapter2, setChapter2] = useState("");
  const [chapter3, setChapter3] = useState("");

  const [reflection, setReflection] = useState("");
  const [scheduleId, setScheduleId] = useState(null);

  // Mengambil data user dari cache menggunakan useQuery
  const { data: userData, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      return token ? JSON.parse(token) : null;
    },
  });

  // Mengambil scheduleId dari API
  useEffect(() => {
    const getTodaySchedule = async () => {
      try {
        const response = await axios.get('http://31.220.6.60:3013/cbn/v1/reportBible/getTodaySchedule');
        console.log('====================================');
        console.log("masuk ga");
        console.log('====================================');
        console.log('result:', response.data);
        
        setScheduleId(response.data.data[0].schedule_id);
        setChapter1(response.data.data[0].chapter_1)
        setChapter2(response.data.data[0].chapter_2)
        setChapter3(response.data.data[0].chapter_3)

      } catch (error) {
        console.error('Error fetching schedule ID:', error);
      }
    };
    getTodaySchedule();
  }, []);


  // Toggle checklist
  const handleCheck = (chapter) => {
    setChecked((prev) => ({ ...prev, [chapter]: !prev[chapter] }));
  };

  // Mengirim data ke API saat tombol ditekan
  const handleSubmit = async () => {
    try {
      console.log('====================================');
      console.log(userData,'userData');
      console.log('====================================');
      await axios.post('http://31.220.6.60:3013/cbn/v1/reportBible/readingProgress', {
        username: userData?.username,
        scheduleId,
        chapter1Checked: checked.chapter_1 ? 1 : 0,
        chapter2Checked: checked.chapter_2 ? 1 : 0,
        chapter3Checked: checked.chapter_3 ? 1 : 0,
        note: reflection,
      });
      alert('Progress membaca berhasil dikirim');
      setChecked({
        chapter_1: false,
        chapter_2: false,
        chapter_3: false,
      });
      setReflection(""); // Reset reflection input
      setScheduleId(null); // Reset scheduleId if needed
  
    } catch (error) {
      console.error('Error submitting reading progress:', error);
      alert('Gagal mengirim progress membaca');
    }
  };

  // Menangani loading dan error
  if (isLoading) return <p>Loading user data...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="banner-bible">
      <div className="banner-content">
        {/* Menampilkan Data User */}
        {userData && (
          <div className="user-data">
            <h2>Welcome, {userData.username}!</h2>
          </div>
        )}

        <div className="reading-reminder">
          <h1 className="banner-title">BIBLE HOLIC</h1>
          <p className="banner-subtitle">
            Sebagai Pelayan TUHAN yang diurapi, Luangkan waktu untuk Firman Tuhan dan renungi apa yang TUHAN taruhkan di hari ini.
          </p>
        </div>

        <div className="reading-plan">
          <h2>Bacaan Hari Ini</h2>
          <ul className="reading-list">
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checked.chapter_1}
                  onChange={() => handleCheck("chapter_1")}
                />
                {chapter1}
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checked.chapter_2}
                  onChange={() => handleCheck("chapter_2")}
                />
               {chapter2}
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={checked.chapter_3}
                  onChange={() => handleCheck("chapter_3")}
                />
                {chapter3}
              </label>
            </li>
          </ul>
        </div>

        <div className="reflection">
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Tuliskan perenungan Anda hari ini..."
            className="reflection-input"
          />
        </div>

        <button className="banner-button" onClick={handleSubmit}>
          Saya Sudah Membaca Hari Ini
        </button>
      </div>
    </div>
  );
};

export default BannerBible;
