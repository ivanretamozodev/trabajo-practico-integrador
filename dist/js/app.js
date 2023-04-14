const btnSubs = document.getElementById("subs");
const URL_BASE = "https://sffsdf-ivanretamozodev.vercel.app";
const URL_BASE_DEVELOPMENT = "http://localhost:3000";

/*
 *=============== fetching de projectos =========== */

const createProjectContainer = (data) => {
  const container = document.querySelector(".proyects__container");
  data.forEach((project) => {
    const image = document.createElement("img");
    image.setAttribute("src", project.imageUrl);
    image.setAttribute("alt", project.alt);
    container.appendChild(image);
  });
};

const fetchProjects = () => {
  try {
    fetch(`${URL_BASE}/projects`)
      .then((data) => data.json())
      .then((data) => createProjectContainer(data.projects));
  } catch (e) {}
};

fetchProjects();

/*
 *=============== fetching de tarjetas =========== */

const getCardsStars = (rating) => {
  const cardStars = document.createElement("div");
  cardStars.classList.add("card__rating");
  for (let i = 0; i < rating; i++) {
    const cardStar = document.createElement("i");
    cardStar.classList.add("bi", "bi-star-fill");
    cardStars.appendChild(cardStar);
  }
  return cardStars;
};

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

    const cardStars = getCardsStars(item.calification);

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
    card.appendChild(cardStars);
    card.appendChild(cardDescription);
    card.appendChild(cardName);
    card.appendChild(cardCostumer);

    //insertando la carta en el contenedor
    cardContainer.appendChild(card);
  });
};

const fetchReviews = () => {
  try {
    fetch(`${URL_BASE}/reviews`)
      .then((data) => data.json())
      .then((data) => createReviewsCards(data.reviews));
  } catch (e) {
    console.log(e);
  }
};

fetchReviews();

/*
 *=============== post suscripcion =========== */

const feedback = (msg, classname, time) => {
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

const handleSuscriptionErrors = (error) => {
  console.log(error);
  error.forEach((error) => feedback(error.msg, "danger", 3500));
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
        ? feedback("Recibirá un email con nuestras ofertas ✔", "success", 3000)
        : handleSuscriptionErrors(data.errors)
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
 *=============== Post de Formulario =========== */

const btnSend = document.getElementById("btn-form");

const handleFormErrors = (errors) => {
  errors.forEach((error) => feedback(error.msg, "danger", 3500));
};

const fetchFormData = (data) => {
  fetch(`${URL_BASE}/messages`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) =>
      res.success
        ? feedback(
            "Gracias,Nos Pondremos en contacto a la brevedad",
            "success",
            3500
          )
        : handleFormErrors(res.errors)
    )
    .catch((e) => {
      console.log(e);
    });
};

const extractFormData = () => {
  const { value: email } = document.getElementById("email");
  const { value: name } = document.getElementById("name");
  const { value: phone } = document.getElementById("phone");
  const { value: message } = document.getElementById("message");

  const data = {
    email,
    name,
    phone,
    message,
  };

  fetchFormData(data);
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  extractFormData();
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
