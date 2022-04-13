import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipes: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(API_URL + id);
    const obj = data.data.recipe;
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
  } catch (err) {
    throw err;
  }
};
