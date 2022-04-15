import icons from '../../img/icons.svg'; // Parcel
class ResultsView {
  #parentElement = document.querySelector('.results');
  #data;
  render(data) {
    this.#data = data;
    console.log(data);
    this.#clearHTML;
    this.#data.map(val => {
      this.#generateHTML(val);
    });
  }
  #clearHTML() {
    this.#parentElement.innerHTML = '';
  }
  #generateHTML(data) {
    const html = `<li class="preview">
    <a class="preview__link preview__link--active" href="#${data.id}">
      <figure class="preview__fig">
        <img src="${data.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${data.title}</h4>
        <p class="preview__publisher">${data.publisher}</p>
        
      </div>
    </a>
  </li>`;

    this.#parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
export default new ResultsView();
