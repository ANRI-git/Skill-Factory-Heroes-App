import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  slug,
  name,
  alter_ego,
  first_appearance,
  characters,
  images
}) => {
  const heroImageUrl = `${images.sm}`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-glutters">
          <div className="col-6">
            <img src={heroImageUrl} alt={name} className="card-img animate__animated animate__flipInY" />
          </div>
          <div className="col-6">
            <div className="card-body animate__animated animate__fadeIn ps-0">
              <h5 className="card-title">{name}</h5>
              <div className="card-text">{alter_ego}</div>
              {
                (alter_ego !== characters) && (<p>{characters}</p>)
              }
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${slug}`} >
                More info...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
