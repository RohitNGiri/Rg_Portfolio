import React from 'react';

import './App.css'
import Footer from './components/footer/footer.components';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/homepage/Home.component';
import AboutSection from './components/About/about.component';
import Skills from './components/Skills/Skills.components';
import ProjectContainer from './components/Projects/Projects.component';
import Contact from './components/Contact/Contact.component';

function App() {
  return (

    <>
      <div className='container'>
        <Navbar></Navbar>
        <Home></Home>
        <AboutSection></AboutSection>
        <Skills></Skills>
        <ProjectContainer></ProjectContainer>
        <Contact></Contact>
        <Footer></Footer>

      </div>

    </>
  );
}

export default App;
