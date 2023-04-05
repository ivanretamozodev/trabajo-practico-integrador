/*
 *Fetching de datos.
 */
const createReviewsCards = (reviewArr) => {
  let cardContainer = document.getElementById("card-container");
  //Recorriendo el array
  reviewArr.forEach((item) => {
    const card = document.createElement("figure");
    card.classList.add("card");
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", item.image);
    cardImage.classList.add("card__img");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = item.title;
    const cardDescription = document.createElement("p");
    cardDescription.textContent = item.description;
    const cardName = document.createElement("h5");
    cardName.classList.add("card__name");
    cardName.textContent = item.name;
    const cardCostumer = document.createElement("h5");
    cardCostumer.classList.add("card__costumer");
    cardCostumer.textContent = item.costumer;

    //CREANDO LA CARTA
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardName);
    card.appendChild(cardCostumer);

    //insertando la carta en el contenedor
    cardContainer.appendChild(card);
    console.log(reviewArr);
  });
};

const fetchReviews = () => {
  fetch("http://localhost:3000/reviews")
    .then((data) => data.json())
    .then((data) => createReviewsCards(data.reviews));
};

fetchReviews();

/*
 *boton de scroll
 */

const btnScroll = document.getElementById("btn-scroll");

const showAndHideScrollBtn = () => {
  window.scrollY > 600
    ? (btnScroll.style.display = "block")
    : (btnScroll.style.display = "none");
};

const goToStartPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.addEventListener("scroll", showAndHideScrollBtn);
btnScroll.addEventListener("click", goToStartPage);
