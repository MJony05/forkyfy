class SearchView {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandler(func) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      func();
    });
  }
}
export default new SearchView();
