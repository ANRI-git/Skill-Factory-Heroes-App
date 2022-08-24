import React, { useMemo } from "react";
import { getHeroesByPublishers } from "../helpers/getHeroesByPublishers";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublishers(publisher);

  useMemo(() => heroes, [publisher]);

  return (
    <div>
      {heroes.map(hero => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </div>
  );
};
