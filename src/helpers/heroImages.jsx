export const heroImages = (id) =>
  new URL(`../assets/heroes/${id}.jpg`, import.meta.url).href;
