import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DarkHeroSection from './components/DarkHeroSection/DarkHeroSection';
import Empowering from './components/Empowering/Empowering';
import ServicesCards from './components/ServicesCards/ServicesCards';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import AnalyticsCard from './components/AnalyticsCard/AnalyticsCard';
import DetailSectionsWrapper from './components/DetailSectionWrapper/DetailSectionWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DarkHeroSection/>
      <Empowering/>
      <ServicesCards/>
      <FeaturesSection/>
      <DetailSectionsWrapper/>
    </div>
  );
}

export default App;