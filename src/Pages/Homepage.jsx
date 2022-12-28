import React, { useState } from 'react';
import Mainpagelayout from '../Componenets/Mainpagelayout';
import { apiGET } from '../misc/config';

const Homepage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGET(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Match Found</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
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
      {renderResults()}
    </Mainpagelayout>
  );
};

export default Homepage;
