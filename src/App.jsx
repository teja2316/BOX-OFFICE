import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Favourites from './Pages/Favourites';
import Pagenotfound from './Pagenotfound';
import Show from './Pages/Show';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/orders" element={<Favourites />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path='/show/:id' element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
