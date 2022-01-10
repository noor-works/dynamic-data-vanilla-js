export const createCard = (el, data) =>
  data.forEach(({ title, description }) => {
    const card = document.createElement("div");
    card.classList.add("single-card");

    const titleTag = document.createElement("h3");
    titleTag.innerHTML = title;
    card.appendChild(titleTag);

    const descriptionTag = document.createElement("p");
    descriptionTag.innerHTML = description;
    card.appendChild(descriptionTag);

    const container = document.querySelector(el);
    container.appendChild(card);
  });
