import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { HeroList } from "../components/HeroList";
import { HeroesContext } from "../context/HeroesContext";

export const HeroByPublisherPage = () => {
  const { publishers, handlePublisher } = useContext(HeroesContext);

  const { formState, onInputChange } = useForm({ publisher: "" });

  const { publisher } = formState;

  return (
    <>
      {publishers === null ? (
        <div>Loading categories...</div>
      ) : (
        <>
          <select name="publisher" value={publisher} onChange={onInputChange}>
            <option key={"All"}>All</option>
            {publishers.map((publisher) => (
              <option key={publisher}>{publisher}</option>
            ))}
          </select>
        </>
      )}
      <HeroList publisher={publisher} handlePublisher={handlePublisher} />
    </>
  );
};
