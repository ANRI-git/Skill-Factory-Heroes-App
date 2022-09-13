import React, { useContext } from "react";
import { useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";
import { HeroesContext } from "../context/HeroesContext";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher, handlePublisher }) => {
  const { isLoading } = useContext(HeroesContext);
  const heroes = handlePublisher(publisher);

  const { counter, increment, decrement, reset } = useCounter(1);
  const maxHeroes = 20;
  const lastPage = Math.ceil(heroes?.length / maxHeroes);
  const handleReset = () => reset(1);

  const prevPage = () => {
    if (counter > 1) decrement();
    heroes.slice(
      (counter - 1) * maxHeroes,
      (counter - 1) * maxHeroes + maxHeroes
    );
  };

  const nextPage = () => {
    if (counter < lastPage) increment();
  };

  useEffect(() => {
    handleReset();
  }, [publisher]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="container d-flex m-4 justify-content-center">
            <button className="col-3" onClick={prevPage}>
              &lt;
            </button>
            <div className="page m-2">
              Page{" "}
              <span className="page_color">
                {counter} of {lastPage}
              </span>
            </div>
            <button className="col-3" onClick={nextPage}>
              &gt;
            </button>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3 mb-5">
            {heroes
              .slice(
                (counter - 1) * maxHeroes,
                (counter - 1) * maxHeroes + maxHeroes
              )
              .map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
          </div>
        </>
      )}
      <div className="container d-flex m-4 justify-content-center">
        <button className="col-3" onClick={prevPage}>
          &lt;
        </button>
        <div className="page m-2">
          Page{" "}
          <span className="page_color">
            {counter} of {lastPage}
          </span>
        </div>
        <button className="col-3" onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
};
