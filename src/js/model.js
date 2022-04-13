import { async } from 'regenerator-runtime';
export const state = {
  recipes: {},
};

export const loadRecipe = async function (id) {
  const data = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const dataJSON = await data.json();
  const obj = dataJSON.data.recipe;
  state.recipes = {
    id: obj.id,
    time: obj.cooking_time,
    publisher: obj.publisher,
    title: obj.title,
    servings: obj.servings,
    source_url: obj.source_url,
    ingredients: obj.ingredients,
    image: obj.image_url,
  };
};
