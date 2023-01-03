import React from 'react';

import './App.css'
import Footer from './components/footer/footer.components';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/homepage/Home.component';
import AboutSection from './components/About/about.component';
import Skills from './components/Skills/Skills.components';

function App() {
  return (

    <>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <AboutSection></AboutSection>
        <Skills></Skills>
        <Footer></Footer>

      </div>

    </>
  );
}

export default App;
