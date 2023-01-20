import React, { useEffect, useState } from 'react';
import Mainpagelayout from '../Componenets/Mainpagelayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../Componenets/show/ShowGrid';

const Favourites = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));

      Promise.all(promises)
      .then(apiData => apiData.map(show => ({show})))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <Mainpagelayout>
      {isLoading && <div>Shows are Still Loading</div>}
      {error && <div>Error Occured: {error}</div>}
      {!isLoading && !shows && <div>No shows were added </div>}
      {!isLoading && !error && shows && <ShowGrid data={shows}/> }
    </Mainpagelayout>
  );
};

export default Favourites;
