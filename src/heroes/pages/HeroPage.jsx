import React, { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeroesContext } from "../context/HeroesContext";

export const HeroPage = () => {
  const { id } = useParams();

  const { handleHeroById } = useContext(HeroesContext);

  const hero = useMemo(() => handleHeroById(id), [id]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={hero.images.lg}
          alt={hero.name}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p>alter ego:</p>
            <b>{hero.biography.alterEgos}</b>
          </li>
          <li className="list-group-item">
            <p>Publisher:</p>
            <b>{hero.biography.publisher}</b>
          </li>
          <li className="list-group-item">
            <p>First appareance:</p>
            <b>{hero.biography.firstAppearance}</b>
          </li>
        </ul>
        <h4>{hero.biography.fullName}</h4>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
