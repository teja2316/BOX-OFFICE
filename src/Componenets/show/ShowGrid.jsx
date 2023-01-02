import React from 'react';
import ShowCard from './ShowCard';
import Image_not_found from '../../images/Image_not_found.jpg';

const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : Image_not_found}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
