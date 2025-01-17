import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ParallaxSection from '../components/ParallaxSection';
import Feature from '../components/Feature';
import BannerInterval from '../components/Carousel';
import VisiMisi from '../components/VisiMisi';
import Pastor from '../components/Pastor';
import OurChurch from '../components/OurChurch';
import Pray from '../components/Pray';
import BannerBible from '../components/BannerBible';
import RenunganInterval from './Renungan';
import WorshipLayout from '../components/WorshipLayouts';
import VideoGrid from '../components/VideoGrid';

function Home() {
  // Ambil data user dari localStorage
  const user = React.useMemo(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }, []);

  // Ambil data jadwal dari API menggunakan React Query
  const { data: schedule, isLoading, isError } = useQuery({
    queryKey: ['scheduleBible'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3001/cbn/v1/reportBible/getTodaySchedule');
      return response.data.data[0]; // Mengambil data schedule pertama
    },
  });

  return (
    <div>
      <ParallaxSection />
      <VideoGrid/> 
      <BannerInterval />
      <WorshipLayout/>
      <RenunganInterval />

      {user && user.status !== '1' ? (
        isLoading ? (
          <p>Loading schedule data...</p>
        ) : isError ? (
          <p>Error fetching schedule data</p>
        ) : (
          <BannerBible scheduleId={schedule?.schedule_id} />
        )
      ) : null}
      <VisiMisi />
      <Feature />
      
      {/* <Pastor /> */}
      <OurChurch />
      <Pray />
    </div>
  );
}

export default Home;
