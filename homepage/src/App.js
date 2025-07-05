import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DarkHeroSection from './components/DarkHeroSection/DarkHeroSection';
import Empowering from './components/Empowering/Empowering';
import ServicesCards from './components/ServicesCards/ServicesCards';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import DetailSectionsWrapper from './components/DetailSectionWrapper/DetailSectionWrapper';
import OurValuesSection from './components/OurValuesSection/OurValuesSection.js';
import Partners from './components/Partners/Partners.js';
import Form from './components/Form/Form.js';
import Footer from './components/Footer/Footer.js';

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
      <OurValuesSection/>
      <Partners/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;