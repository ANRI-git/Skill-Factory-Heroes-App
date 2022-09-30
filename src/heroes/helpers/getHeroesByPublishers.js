export const getHeroesByPublishers = (publisher = "", heroes) => {
  // const validPublishers = ["DC Comics", "Marvel Comics"];

  if (publisher === "All" || publisher === "") return heroes;

  return heroes.filter((hero) => hero.biography.publisher === publisher);
};
