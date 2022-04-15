import View from './View.js';

import icons from '../../img/icons.svg';

export class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    console.log(numPages);
  }
}
export default new PaginationView();
