import { useEffect, useState } from "react";

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
        .filter((publisher) => publisher !== "" && publisher !== null)
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
