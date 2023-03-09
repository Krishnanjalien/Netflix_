 import React from 'react';
 import { action } from './components/urls';
 import { orginals } from './components/urls';

import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';
import './App.css'
import Rowpost from './components/Rowpost';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} name='NetflixOrginals'/>
      <Rowpost url={action} name='Action' isSmall/>
     
    </div>
  );
}

export default App;
