import React from 'react';

import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <TeamMembers />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;