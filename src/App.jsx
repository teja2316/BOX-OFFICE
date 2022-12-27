import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Favourites from './Pages/Favourites';
import Pagenotfound from './Pagenotfound';
import Nav from './Componenets/Nav';


function App() {
  return (
    <div>
    <Nav />    
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/orders' element={<Favourites />}/>
        <Route path='*' element={<Pagenotfound />}/>
      </Routes>
    

    </div>
  );
}

export default App;
