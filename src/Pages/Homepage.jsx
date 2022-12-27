import React, { useState } from 'react';
import Mainpagelayout from '../Componenets/Mainpagelayout';

const Homepage = () => {
  const [input, setInput] = useState('');

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/people?q=${input}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <Mainpagelayout>
      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        search
      </button>
    </Mainpagelayout>
  );
};

export default Homepage;
