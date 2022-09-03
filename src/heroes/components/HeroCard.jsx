import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-glutters">
          <div className="col-4">
            <img src={heroImageUrl} alt={superhero} className="card-img animate__animated animate__flipInY" />
          </div>
          <div className="col-8">
            <div className="card-body animate__animated animate__fadeIn">
              <h5 className="card-title">{superhero}</h5>
              <div className="card-text">{alter_ego}</div>
              {
                (alter_ego !== characters) && (<p>{characters}</p>)
              }
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`} >
                More info...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
