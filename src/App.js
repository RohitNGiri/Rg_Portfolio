import React from 'react';

import './App.css'
import Footer from './components/footer/footer.components';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/homepage/Home.component';

function App() {
  return (

    <>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>

      </div>

    </>
  );
}

export default App;
