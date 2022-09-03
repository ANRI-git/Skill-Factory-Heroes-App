import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userForm } from "../../hooks/userForm";

export const SearchPage = () => {
  const { searchText, onInputChange } = userForm({
    searchText: "",
  });

  const navigate = useNavigate();

  const location = useLocation();

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() < 1) return;
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            No hero found with <b>id</b>
          </div>
        </div>
      </div>
    </>
  );
};
