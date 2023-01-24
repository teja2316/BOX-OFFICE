import React, { useState } from 'react';
import ActorGrid from '../Componenets/actor/ActorGrid';
import CustomRadio from '../Componenets/CustomRadio';
import Mainpagelayout from '../Componenets/Mainpagelayout';
import ShowGrid from '../Componenets/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Homepage.styled';

const Homepage = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
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
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  return (
    <Mainpagelayout>
      <SearchInput
        type="text"
        placeholder="search for something"
        onChange={e => setInput(e.target.value)}        
        onKeyDown={onKeyDown}
        value={input} 
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChage}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChage}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </Mainpagelayout>
  );
};

export default Homepage;
