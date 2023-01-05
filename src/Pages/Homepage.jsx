import React, { useState } from 'react';
import ActorGrid from '../Componenets/actor/ActorGrid';
import Mainpagelayout from '../Componenets/Mainpagelayout';
import ShowGrid from '../Componenets/show/ShowGrid';
import { apiGET } from '../misc/config';

const Homepage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowaSearch = searchOption === 'shows';
  

  const onSearch = () => {
    apiGET(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
      // console.log(result);
    });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  const onRadioChage = e => {
    setSearchOption(e.target.value);
  };
  // console.log(searchOption);

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Match Found</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (<ShowGrid data={results} />) : (<ActorGrid data={results} />) ;
    }
    return null;
  };

  return (
    <Mainpagelayout>
      <input
        type="text"
        placeholder="search for something"
        onChange={e => setInput(e.target.value)}
        value={input}
        onKeyDown={onKeyDown}
      />

      <div>
        <label htmlFor="shows-search">
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowaSearch}
            onChange={onRadioChage}
          />
          Shows
        </label>

        <label htmlFor="actors-search">
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowaSearch}
            onChange={onRadioChage}
          />
          Actors
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        search
      </button>
      {renderResults()}
    </Mainpagelayout>
  );
};

export default Homepage;
