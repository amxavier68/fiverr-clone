import React from 'react';

import './App.css';

import Header from './Layout/header-footer/header.component';
import SubNav from './Layout/header-footer/top-subnav';
import Segments from './Segments';
import Footer from './Layout/header-footer/footer';
import Copyright from './Layout/header-footer/copyright';

const App = () => {
  return (
    <div>
      <Header />
      <SubNav />
      <Segments />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App;
