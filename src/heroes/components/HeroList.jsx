import React, { useContext } from "react";
import { HeroesContext } from "../context/HeroesContext";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher, handlePublisher }) => {
  const { isLoading } = useContext(HeroesContext);

  const heroes = handlePublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)
      )}
    </div>
  );
};
