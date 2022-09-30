import { useEffect, useState } from 'react';

const validPublishers = [
  'ABC Studios',
  'DC Comics',
  'Dark Horse Comics',
  'George Lucas',
  'IDW Publishing',
  'Icon Comics',
  'Image Comics',
  'J. K. Rowling',
  'J. R. R. Tolkien',
  'Marvel Comics',
  'Microsoft',
  'NBC - Heroes',
  'Rebellion',
  'Shueisha',
  'Sony Pictures',
  'South Park',
  'Star Trek',
  'SyFy',
  'Titan Books',
  'Universal Studios',
];

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    publishers: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    let publishers = new Set();
    for (const hero of data) {
      publishers.add(hero.biography.publisher);
    }

    setState({
      data,
      isLoading: false,
      publishers: Array.from(publishers)
        .filter((publisher) => publisher !== '' && publisher !== null && validPublishers.includes(publisher))
        .sort(),
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    publishers: state.publishers,
  };
};
