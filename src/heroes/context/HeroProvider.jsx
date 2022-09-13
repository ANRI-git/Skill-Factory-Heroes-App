import React, { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getHeroById } from "../helpers/getHeroById";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { getHeroesByPublishers } from "../helpers/getHeroesByPublishers";
import { HeroesContext } from "./HeroesContext";

export const HeroProvider = ({ children }) => {
  const { data, isLoading, publishers } = useFetch(
    `https://akabab.github.io/superhero-api/api/all.json`
  );

  const heroes = useMemo(() => data, [data])

  const handlePublisher = (publisher) => {
    return getHeroesByPublishers(publisher, heroes);
  };

  const handleHeroById = (id) => {
    return getHeroById(id, heroes);
  };

  const handleSearch = (name) => {
    return getHeroesByName(name, heroes);
  };

  return (
    <HeroesContext.Provider
      value={{ isLoading, publishers, handlePublisher, handleHeroById, handleSearch }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
