import View from './View.js';

import icons from '../../img/icons.svg';

export class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    if (numPages > 1 && this._data.page === 1) {
      return ` <button class="btn--inline pagination__btn--next" data-goto="${
        this._data.page + 1
      }">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    } else if (numPages > this._data.page && numPages > 1) {
      return `<button class="btn--inline pagination__btn--prev" data-goto="${
        this._data.page - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button> <button class="btn--inline pagination__btn--next" data-goto="${
      this._data.page + 1
    }">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    } else if (numPages == this._data.page && numPages > 1) {
      return `<button class="btn--inline pagination__btn--prev" data-goto="${
        this._data.page - 1
      }">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button>`;
    } else {
      return ``;
    }
  }
  _pagination(handler) {
    this._parentElement.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.closest('.btn--inline')) {
        let btn = e.target.closest('.btn--inline');
        const gotoPage = +btn.dataset.goto;
        console.log(gotoPage);
        console.log(btn);
        handler(gotoPage);
      }
    });
  }
}
export default new PaginationView();
