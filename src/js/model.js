import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipes: {},
  search: {
    query: '',
    results: {},
  },
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

export const searchResult = async function (searchKey) {
  try {
    const data = await getJSON(API_URL + `?search=${searchKey}`);
    const getArr = data.data.recipes;
    // console.log(data.data.recipes);
    state.search.results = getArr.map(val => {
      return {
        id: val.id,
        image: val.image_url,
        publisher: val.publisher,
        title: val.title,
      };
    });
  } catch (err) {
    throw err;
  }
};
