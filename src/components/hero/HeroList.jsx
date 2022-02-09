import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';

import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-md-3 row-cols-1 g-3 animate__animated animate__fadeIn">
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
