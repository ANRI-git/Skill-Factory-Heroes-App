export const getHeroById = (id, heroes) => {
  return heroes.find((hero) => hero.slug === id);
};
