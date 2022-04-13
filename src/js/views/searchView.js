class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const val = document.querySelector('.seach__field');
    return val;
  }
}
export default new SearchView();
