import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import PaginationView  from './views/paginationView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.errorHandling();
  }
};

const controlSearchResult = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResult(query);

    // 3) render result
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultPage());

    PaginationView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};
// controlSearchResult();
const init = function () {
  searchView.addHandler(controlSearchResult);
  recipeView.addHandlerRender(controlRecipes);
};
init();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
