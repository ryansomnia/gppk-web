import React from 'react';
import ParallaxSection from '../components/ParallaxSection';
import Feature from '../components/Feature';
import CarouselInterval from '../components/Carousel'
import VisiMisi from '../components/VisiMisi';

function Home() {
  return (
    <div>
      <ParallaxSection />
      <CarouselInterval/>
      <Feature/>
      <VisiMisi/>
    </div>
  );
}

export default Home;
