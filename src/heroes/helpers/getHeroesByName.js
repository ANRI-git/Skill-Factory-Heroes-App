export const getHeroesByName = (name = "", heroes) => {
  console.log(name);
  if (name.trim().length === 0) return [];

  name = name.toLowerCase();

  return heroes.filter((hero) => hero.name.toLowerCase().includes(name));
};
