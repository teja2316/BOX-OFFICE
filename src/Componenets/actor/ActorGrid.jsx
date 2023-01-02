import React from 'react';
import ActorCard from './ActorCard';
import Image_not_found from '../../images/Image_not_found.jpg';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : Image_not_found}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
