const btnSubs = document.getElementById("subs");
const URL_BASE = "http://localhost:3000";

/*
 *=============== fetching de tarjetas =========== */

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
    cardDescription.classList.add("card__description");
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
  });
};

const fetchReviews = () => {
  fetch(`${URL_BASE}/reviews`)
    .then((data) => data.json())
    .then((data) => createReviewsCards(data.reviews));
};

fetchReviews();

/*
 *=============== post suscripcion =========== */

const feedbackNewsletter = (msg, classname, time) => {
  const feedback = document.querySelector(".feedback");
  const feedbackText = document.querySelector(".feedback__text");
  feedback.style.display = "block";
  feedback.classList.add(`${classname}`);
  feedbackText.textContent = msg;
  setTimeout(() => {
    feedback.style.display = "none";
    feedback.classList.remove(`${classname}`);
  }, time);
};

const fetchNewsletter = (email) => {
  fetch(`${URL_BASE}/subscription`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => response.json())
    .then((data) =>
      data.success
        ? feedbackNewsletter("Te enviamos un email ✔", "success", 3000)
        : feedbackNewsletter(data.errors.email.msg, "danger", 3000)
    );
};

const subscribeMail = (email) => {
  fetchNewsletter({ email });
};

btnSubs.addEventListener("click", (e) => {
  e.preventDefault();
  const { value } = document.getElementById("newsletterEmail");
  subscribeMail(value);
});

/*
 *=============== boton de scroll =========== */

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
