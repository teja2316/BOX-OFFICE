import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Favourites from './Pages/Favourites';
import Pagenotfound from './Pagenotfound';
import Show from './Pages/Show';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path='/show/:id' element={<Show />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
