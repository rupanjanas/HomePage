import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* You can add more sections here if your page extends below the hero */}
    </div>
  );
}

export default App;