import React from 'react';

import './App.css'
import Footer from './components/footer/footer.components';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/homepage/Home.component';
import AboutSection from './components/About/about.component';

function App() {
  return (

    <>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <AboutSection></AboutSection>
        <Footer></Footer>

      </div>

    </>
  );
}

export default App;
