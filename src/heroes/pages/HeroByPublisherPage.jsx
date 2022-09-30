import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { HeroList } from '../components/HeroList';
import { HeroesContext } from '../context/HeroesContext';

const initialForm = {
  publisher: '',
};

export const HeroByPublisherPage = () => {
  const { publishers, handlePublisher } = useContext(HeroesContext);

  const { publisher, formState, onInputChange } = useForm(initialForm);

  return (
    <>
      <div className='container d-flex m-4 justify-content-center'>
        {publishers === null ? (
          <div>Loading categories...</div>
        ) : (
          <>
            <select name='publisher' value={publisher} onChange={onInputChange}>
              <option key={'All'}>All</option>
              {publishers.map((publisher) => (
                <option key={publisher}>{publisher}</option>
              ))}
            </select>
          </>
        )}
      </div>
      <HeroList publisher={publisher} handlePublisher={handlePublisher} />
    </>
  );
};
