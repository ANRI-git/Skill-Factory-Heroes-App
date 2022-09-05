import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { userForm } from "../../hooks/userForm";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const { searchText, onInputChange } = userForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() < 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <h4>Searching</h4>
        <hr />
        <div className="col-12">
          <form onSubmit={onSearchSubmit} className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                value={searchText}
                autoComplete="off"
                onChange={onInputChange}
              />
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary mt-1">Search</button>
            </div>
          </form>
        </div>
        <div className="col-12">
          {q === "" && <div className="alert alert-primary">Search a hero</div>}
          {!heroes.length && q !== "" && (
            <div className="alert alert-danger">
              No hero found with <b>{q}</b>
            </div>
          )}
        </div>
        <h4>Results</h4>
        <hr />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
